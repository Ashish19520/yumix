import React, { useEffect, useState } from 'react'
import { Container, Switch, Select, Typography } from '@mui/material'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { SelectChangeEvent } from '@mui/material/Select'
import useStyles from './style'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Dispatch } from 'redux'
import {
  fetchProductDetails,
  fetchProductPriceDetails,
  fetchProductProgramDetails,
  fetchProductFeesDetails,
  fetchListingDetails
} from '../../actions/posts'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { ImageNotSupportedTwoTone, Reviews } from '@mui/icons-material'

function ListCalc () {
  const classes = useStyles()
  // const [age, setAge] = React.useState('');
  // const [selectedIndex, setSelectedIndex] = useState<number>(0)
  // const [image, setImage] = useState<string>('/images/work1.png')
  // const [toggleFunction,setToggleFunction] = useState<boolean>(true)
  const navigate = useNavigate()

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value);

  // }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  // const points = [
  //   {
  //     para : "Keywords impact listing visibility.",
  //     image : "/images/work1.png"
  //   },
  //   {
  //     para : "Search position affects discoverability.",
  //     image : "/images/work2.png"
  //   },
  //   {
  //     para : "Discoverability ensures visibility to potential buyer",
  //     image : "/images/work3.png"
  //   },
  //   {
  //     para : "Unfound listing is ineffective",
  //     image : "/images/work4.png"
  //   }
  // ]
  // const points2 = [
  //   {
  //     para : "Overview of the product and its specifications",
  //     image : "/images/work1.png"
  //   },
  //   {
  //     para : "In-depth view of product features and applications.",
  //     image : "/images/work2.png"
  //   },
  //   {
  //     para : "Emphasise brand and its unique story",
  //     image : "/images/work3.png"
  //   },
  //   {
  //     para : "Add images to give depth to your listing",
  //     image : "/images/work4.png"
  //   }
  // ]
  // function showElistratorOnSomeInterval(){

  //   if(selectedIndex ===0 || selectedIndex <=3){

  //     setTimeout(()=>{
  //       setSelectedIndex(1)
  //       setImage("/images/work2.png")
  //     },2000)

  //     setTimeout(()=>{
  //       setSelectedIndex(2)
  //       setImage("/images/work3.png")
  //     },4000)

  //     setTimeout(()=>{
  //       setSelectedIndex(3)
  //       setImage("/images/work4.png")
  //     },6000)

  //     setTimeout(()=>{
  //       setSelectedIndex(0)
  //       setImage("/images/work1.png")
  //     },8000)

  //   }
  // }

  // if(selectedIndex === 0){
  //   showElistratorOnSomeInterval()
  // }
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("animate__animated");
  //         entry.target.classList.add("animate__fadeIn");
  //       }
  //     });
  //   });

  //   const hiddenElements = document.querySelectorAll(".bannerList_hidden");
  //   hiddenElements.forEach((el) => observer.observe(el));
  // }, []);

  const dispatch: Dispatch<any> = useDispatch()
  const [value, setValue] = useState()
  const [country, setCountry] = useState('US')
  const [loader, setLoader] = useState(false)
  const [pDetails, setpDetails] = useState<any>(null)
  const [prDetails, setprDetails] = useState<any>(null)
  const [prgDetails, setprgDetails] = useState<any>(null)
  const [pfeeDetails, setpfeeDetails] = useState<any>(null)
  const [showListing, setShowListing] = useState<any>(false)
  const [score, setScore] = useState<Array<any>>([]);
  const [desc, setDesc] = useState<any>({
    fiveLengthTest:true,
    lengthTest:true,
    firstLetterTest:true,
    emojiTest:true,
    capsTest:true,
    overallLengthTest:true,
    
  })
  const [titleTest, setTitleTest] = useState<any>({
    emojiTest:true,
    lengthTest:true,
    restrictedTest:true,
    firstLetterTest:true,
  })
  const [imgTest, setImgTest] = useState<any>({
    whiteBackgroundTest:true,
    includeVideos:true,
    sevenImages:true,
    thousandPixels:true,
  })
  
  const [listingDetails, setListingDetails] = useState<any>({
    title: '',
    rating: '',
    price: '',
    totalReviews: '',
    mainImageLink: '',
    images: [],
    bulletPoints: [],
    pixels:{},
    whiteImage:[]
  })

  const changeHandlar = (e: any) => {
    setValue(e.target.value)
  }
  const countryHandlar = (e: any) => {
    e.target.checked ? setCountry('IN') : setCountry('US')
  }
  useEffect(() => {
    window.scrollTo(0, 700)
  }, [loader])

  const fetch = async () => {
    setLoader(true)

    const productDetails: any = await dispatch(
      fetchProductDetails(value, country)
    )
    setpDetails(productDetails)

    const priceDetails: any = await dispatch(
      fetchProductPriceDetails(value, country)
    )
    setprDetails(priceDetails)

    const listingDetails: any = await dispatch(
      fetchListingDetails(value, country)
    )
    if(listingDetails){
       setListingDetails(listingDetails)
       setShowListing(true);
    }

    setLoader(false)
  }
  const isUsernameUnique = (value: any) => {
    return value.trim() !== ''
  }
  const minTen = (value: any) => {
    return value.match(/^[^\s]{10}$/)
  }
  const {
    title,
    rating,
    price,
    totalReviews,
    mainImageLink,
    images,
    bulletPoints,
    pixels,
    whiteImage
  } = listingDetails

  ValidatorForm.addValidationRule('isUsernameUnique', isUsernameUnique)
  ValidatorForm.addValidationRule('minTen', minTen)

// ################################ validate bullet Points #################################

  function checkArrayElements (arr: string[]): {
    fiveLengthTest:boolean,
    lengthTest:boolean,
    firstLetterTest:boolean,
    emojiTest:boolean,
    capsTest:boolean,
    overallLengthTest:boolean,
  } {
    let obj:any={
      fiveLengthTest:true,
      lengthTest:true,
      firstLetterTest:true,
      emojiTest:true,
      capsTest:true,
      overallLengthTest:true,
    }
    
    if (arr.length < 5) {
      obj.fiveLengthTest=false;
    }

    const minLength = 150

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i]

      if (element.length < minLength) {
        obj.lengthTest=false;
      }
      const firstWord = element.split(' ')[0]
      if (firstWord && firstWord[0] !== firstWord[0].toUpperCase()) {
        obj.firstLetterTest=false
      }
      if (arr.reduce((total, element) => total + element.length, 0) < 1000) {
        obj.overallLengthTest=false
      }
      const emojiRegex = /[\u{1F300}-\u{1F6FF}\u{2600}-\u{26FF}]/u
      if (emojiRegex.test(element)) {
        obj.emojiTest=false;
      }
      const words = element.split(' ');
      const allWordsAreUpperCase = words.every(word => word === word.toUpperCase());
     if (allWordsAreUpperCase) {
      obj.capsTest=false;
      }
    }
    return desc;
  }
  const resultFunc = async () => {
    const result = await checkArrayElements( bulletPoints )
    setDesc(result)
  }
  useEffect(() => {
    bulletPoints.length > 2 && resultFunc()
  }, [bulletPoints])

// ########################################validate TItle################################
function validateString(string:string):{
    emojiTest:boolean,
    lengthTest:boolean,
    restrictedTest:boolean,
    firstLetterTest:boolean,
}  {
  let obj={
    emojiTest:true,
    lengthTest:true,
    restrictedTest:true,
    firstLetterTest:true,
  }
  if (string.length <150) {
   obj.lengthTest=false;
  }
  
  const words = string.split(' ');
  const firstWord = words[0];
  
  if (firstWord !== capitalize(firstWord)) {
    obj.firstLetterTest=false;
   }
    
  if (containsEmoji(string)) {
    obj.emojiTest=false;
   }
    
  if (containsRestrictedCharacters(string)) {
    obj.restrictedTest=false;
  }
  
  return obj;
  }


function capitalize(word:string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function containsEmoji(string:string) {
  const regex = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
  return regex.test(string);
}
function containsRestrictedCharacters(string:string) {
  const restrictedChars = new Set("~!*$?_~{}#<>|*;^¬¦");
  for (let i = 0; i < string.length; i++) {
    if (restrictedChars.has(string[i])) {
      return true;
    }
  }
  return false;
}
const resultTitle = async () => {
  const result = await validateString(title)
  setTitleTest(result)
}
useEffect(() => {
  title.length > 1 && resultTitle()
}, [title])
// ############################ validate Image ##########################

     function validateImages(imageArray: string[], height:number,width:number,whiteImage:any):{
    whiteBackgroundTest:boolean,
    includeVideos:boolean,
    sevenImages:boolean,
    thousandPixels:boolean,
    }{
      let obj={
        whiteBackgroundTest:true,
        includeVideos:true,
        sevenImages:true,
        thousandPixels:true,
      }
 
         if (imageArray.length === 0) {
          obj.sevenImages=false;
          }

        if (imageArray.length < 7) {
          obj.sevenImages=false;
            }

           if(height<1000&&width<1000) {
           obj.thousandPixels=false;
           }
           if(!checkForNonZeroValue(whiteImage)) {
           obj.whiteBackgroundTest=false;
           }


  
        const hasPlayIconOverlay = imageArray.some(image => image.includes("play"));
        if (hasPlayIconOverlay===false) {
         obj.includeVideos=false;
        }
          
        return  obj;
      }

        function checkForNonZeroValue(objectsArray:any) {
          return objectsArray.some((obj:any) => obj.x > 0 || obj.y > 0);
        }

        const imgResultFunc = async () => {
          const result = await validateImages(images,pixels?.height,pixels.width,whiteImage)
          setImgTest(result)
        }
        useEffect(() => {
          images.length >1  && imgResultFunc()
        }, [images])

      const total=async()=>{

        let totalScore=[];
        if(images.length>0){
        for(let key in imgTest){
          if(imgTest[key]){
            totalScore.push(key);
          }
        }
      }
        if(bulletPoints.length>0){
        for(let key in desc){
          if(desc[key]){
            totalScore.push(key);
          }
         }
        }
       
        if(title.length>0){
        for(let key in titleTest){
          if(titleTest[key]){
           totalScore.push(key)
          
        }
      }
      }
        if(listingDetails &&rating &&parseInt(rating.replace(',', '').replace(' ratings', '')) >= 4){
          totalScore.push('rating');
        }
        if(listingDetails &&totalReviews &&parseInt(totalReviews.match(/(\d+)\s+ratings/)[1]) >= 20){
          totalScore.push('review');
        }
        setScore(totalScore);
       
      }
     
      useEffect(()=>{
        total();
      },[imgTest,desc,title])
  return (
    <ListContainer
      className='margin-nav'
      style={{ backgroundColor: '#FFFCFC' }}
    >
      {loader && (
        <div className='mainPreloaderMain'>
          <div className='mainPreloader'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      <Container maxWidth='lg' className='container'>
        <div className='hero_wrapper'>
          <div className={`info-box_FBA ${classes.index}`}>
            <div className='fba-Title'>Optimise Listing Visibilty</div>
            <div className='fba-subTitle'>
              Increase your Amazon sales and conversions with a perfectly
              optimised listing alongside on page factors.
            </div>
            <div>
              US Product
              <Switch
                onChange={countryHandlar}
                className={` ${classes.index}`}
              />
              Indian Product
            </div>

            {/* <input
                type="text"
                placeholder="Enter Amazon Product's ASIN Number"
                value={value}
                className={` ${classes.index}`}
                onChange={changeHandlar}
              ></input>
              <button 
              disabled={!value}
               onClick={fetch} 
              className= {`btn_FBACalculate ${classes.index}`}>
                Optimising Visibilty</button> */}
            <ValidatorForm className='input-field' onSubmit={fetch}>
              <TextValidator
                placeholder="Enter Amazon Product's ASIN Number"
                name='message'
                type='text'
                value={value}
                style={{ borderRadius: '5px', width: '305px' }}
                className='input'
                onChange={changeHandlar}
                validators={['required', 'isUsernameUnique', 'minTen']}
                errorMessages={[
                  'This field is required',
                  'Blank spaces are not allowed',
                  'A valid ASIN no contain 10 digits and no white spaces'
                ]}
              />

              <button
                // disabled={!value||value?.length<10||value.length>10}
                className='btn_FBACalculate pointer'
              >
                Calculate
              </button>
            </ValidatorForm>
          </div>
          <div className={`${classes.heroImg} box`}>
            <motion.img
              src='../images/Rock2@3x.png'
              className={classes.imageLines6}
              initial='hidden'
              animate='show'
              width='70%'
              height='70%'
            ></motion.img>
            <motion.img
              src='../images/Ellipse.png'
              className={classes.imageLines5}
              initial='hidden'
              animate='show'
              width='70%'
              height='70%'
            ></motion.img>
            <img
              className={`${classes.heroImg} hoverimg`}
              src='../images/Saly-10.png'
              alt='img'
              height='517px'
              width='517px'
            ></img>
          </div>
        </div>

        <motion.img
          src='../images/Group 38594.png'
          className={classes.imageLines1}
          initial='hidden'
          animate='show'
          width='100%'
        ></motion.img>
        <motion.img
          src='../images/Ellipse 63@3x.png'
          className={classes.imageLines2}
          initial='hidden'
          animate='show'
        ></motion.img>
        {/* <motion.img
              src="../images/Ellipse 63@3x.png"
              className={classes.imageLines2}
              initial="hidden"
              animate="show"
              width="70%"
              height="70%"
            ></motion.img> */}
      </Container>
      <Container maxWidth='lg' className='container'>
        <div className={classes.wrapper}>
          <div className={`${classes.relative} ${classes.index}`}>
            {pDetails && pDetails?.data?.otherProducts?.products[0]?.imageUrl?(<img
              src={
                pDetails && pDetails?.data?.otherProducts?.products[0]?.imageUrl
                  ? pDetails?.data?.otherProducts?.products[0]?.imageUrl
                  : ''
              }
              alt='img'
              height='100px'
              width='100px'
            ></img>):<p></p>}
            {/* <motion.img
              src="../images/Ellipse.png"
              className={classes.imageLines7}
              initial="hidden"
              animate="show"
            ></motion.img> */}
          </div>

          <div className={classes.innerWrapper}>
            <div className={classes.innerimg}>
              <h2>
                {' '}
                {pDetails && pDetails?.data?.otherProducts?.products[0]?.title
                  ? pDetails?.data?.otherProducts?.products[0]?.title
                  : 'Your product is going to list here'}
              </h2>
              <motion.img
                src='../images/Ellipse 64.png'
                className={classes.imageLines13}
                initial='hidden'
                animate='show'
              ></motion.img>
            </div>
            <div className={classes.items}>
              <div className={classes.box}>
                <h3>Customer Reviews Count</h3>
                <p>
                  {' '}
                  {pDetails &&
                  pDetails?.data?.otherProducts?.products[0]
                    ?.customerReviewsCount
                    ? pDetails?.data?.otherProducts?.products[0]
                        ?.customerReviewsCount
                    : '-'}
                </p>
              </div>
              <div className={classes.box}>
                <h3>Product Id</h3>
                <p>
                  {pDetails && pDetails?.data?.otherProducts?.products[0]?.asin
                    ? pDetails?.data?.otherProducts?.products[0]?.asin
                    : '-'}
                </p>
              </div>
              <div className={classes.box}>
                <h3>Price</h3>
                <p>
                  {country === 'US' ? '$' : '₹'}
                  {prDetails && prDetails?.data?.price?.amount
                    ? prDetails?.data?.price?.amount
                    : '0'}
                </p>
              </div>
              <div className={classes.box}>
                <h3>Ratings</h3>
                <p>
                  {pDetails &&
                  pDetails?.data?.otherProducts?.products[0]
                    ?.customerReviewsRating
                    ? pDetails?.data?.otherProducts?.products[0]
                        ?.customerReviewsRating
                    : '-'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* <Container maxWidth='lg' className="container">
        <div className={`${classes.twoContainer} `}>
          <div className={`${classes.innerTwoContainer} ${classes.index}`}>

            <div className={`${classes.innerThirdContainer}`}>
              <div>
                <p>Desirability</p>
              </div>
              <div>
              <img src="../images/Oval.png" alt="" height="72px" width="72px"/>
              </div>
            </div>
          </div>
          <div className={`${classes.innerTwoContainer} ${classes.index}`}>
            <div className={classes.innerThirdContainer}>
              <div>
                <p>Discoverability</p>
              </div>
              <div>
              <img src="../images/Oval.png" alt="" height="72px" width="72px"/>
              </div>
            </div>
          </div>
        </div>
        <motion.img
              src="../images/Ellipse 63.png"
              className={classes.imageLines8}
              initial="hidden"
              animate="show"
            ></motion.img>
      </Container>
        */}
      {showListing?(
        <>
      <Container style={{ marginTop: '150px' }} className={classes.relative}>
        <div className={classes.fourthContainer}>
          <div style={{ zIndex: '5' }}>
            <h1>Analysis</h1>
          </div>
          <div className={classes.innerOneFourth}>
            {/* <p>4 possible error(s) analyzed.</p> */}
            <p>5 details analyzed.</p>
            <div className="input-field">
              <h4> Total score:{(score.length/16)*100}%</h4>
            </div>
          </div>
        </div>
        <motion.img
          src='../images/Frame 54 (1).png'
          className={classes.imageLines3}
          initial='hidden'
          animate='show'
          width='70%'
          height='70%'
        ></motion.img>
      </Container>
      <Container>
        <div className={classes.fifthContainer}>
          <div className={classes.innerFifthContainer}>
            <div className={classes.innersecondFifthContainer}>
              <h2 className={classes.wid}>Title</h2>

            </div>
            {title.length?<>
              <div className={classes.innersecondFifthContainer}>
              <p className='txtWidth'>
              Title does not contain symbols or emojis.
              </p>
              <img src={titleTest.emojiTest?
                "../images/greenTick.png":"../images/redTick.png"} alt="" height="30px" width="30px"/>
            </div>
            <div className={classes.innersecondFifthContainer}>
              <p className='txtWidth'>
              Title contains 150+ characters
              </p>
              <img src={titleTest.lengthTest?
                "../images/greenTick.png":"../images/redTick.png"} alt="" height="30px" width="30px"/>
            </div>
            <div className={classes.innersecondFifthContainer}>
              <p className='txtWidth'>
              Title does't contains restricted characters {`~!*$?_~{}#|<>*;^¬¦`}
              </p>
              <img src={titleTest.restrictedTest?
                "../images/greenTick.png":"../images/redTick.png"} alt="" height="30px" width="30px"/>
            </div>
            <div className={classes.innersecondFifthContainer}>
              <p className='txtWidth'>
              First letter of title is in uppercase.
              </p>
              <img src={titleTest.firstLetterTest?
                "../images/greenTick.png":"../images/redTick.png"} alt="" height="30px" width="30px"/>
            </div>
            </>
            :<h2 className='custom-bp'>Not Available</h2>}
            
          </div>
        </div>

        <div className={classes.fifthContainer} style={{marginTop:"100px"}}>
          <div className={classes.innerFifthContainer}>
            <div className={classes.innersecondFifthContainer}>
              {/* <h4>Description</h4> */}
              <h2 className={classes.wid}>Bullet Points</h2>
             
            </div>
            {bulletPoints?.length?(<>
            <div className={classes.innersecondFifthContainer}>
              <p className='txtWidth'>
              5+ bullet points.
              </p>
              <img src={desc.fiveLengthTest?
                "../images/greenTick.png":"../images/redTick.png"} alt="" height="30px" width="30px"/>
            </div>
            <div className={classes.innersecondFifthContainer}>
              <p className='txtWidth'>
              150+ characters in each bullet point.
              </p>
              <img src={desc.lengthTest?
                "../images/greenTick.png":"../images/redTick.png"} alt="" height="30px" width="30px"/>
            </div>
            <div className={classes.innersecondFifthContainer}>
              <p className='txtWidth'>
              First letter of bullet points are capitalized.
              </p>
              <img src={desc.firstLetterTest?
                "../images/greenTick.png":"../images/redTick.png"} alt="" height="30px" width="30px"/>
            </div>
            <div className={classes.innersecondFifthContainer}>
              <p className='txtWidth'>
              Bullet points are not in all caps.
              </p>
              <img src={desc.capsTest?
                "../images/greenTick.png":"../images/redTick.png"} alt="" height="30px" width="30px"/>
            </div>
            <div className={classes.innersecondFifthContainer}>
              <p className='txtWidth'>
              Bullet points does not contain icons.
              </p>
              <img src={desc.emojiTest?
                "../images/greenTick.png":"../images/redTick.png"} alt="" height="30px" width="30px"/>
            </div>
            <div className={classes.innersecondFifthContainer}>
              <p className='txtWidth'>
              1000+ characters in description or A+ content.
              </p>
              <img src={desc.overallLengthTest  ?
                "../images/greenTick.png":"../images/redTick.png"} alt="" height="30px" width="30px"/>
              
            </div>
            </>):<h3 className='custom-bp'>Not Available</h3>}
          </div>
        </div>

        <div className={classes.fifthContainer} style={{marginTop:"150px"}}>
          <div className={classes.innerFifthContainer}>
            <div className={classes.innersecondFifthContainer}>
              <h2 className={classes.wid} >Image </h2>
              {/* <div className={listingDetails && images && imgTest.result
                    ? classes.greenGood
                    : classes.redGood
                }>
               
               {listingDetails && images && imgTest.result?"Good":"Poor"}
                </div> */}
            </div>
            <div className={classes.innersecondFifthContainer}>
              <p className='txtWidth'>
              Main image is on a white background.
              </p>
              <img src={imgTest.whiteBackgroundTest?
                "../images/greenTick.png":"../images/redTick.png"} alt="" height="30px" width="30px"/>
            </div>
            <div className={classes.innersecondFifthContainer}>
              <p className='txtWidth'>
              Includes video.
              </p>
              <img src={imgTest.includeVideos?
                "../images/greenTick.png":"../images/redTick.png"} alt="" height="30px" width="30px"/>
            </div>
            <div className={classes.innersecondFifthContainer}>
              <p className='txtWidth'>
              Main image is of 1000 X 1000 px .
              </p>
              <img src={imgTest.thousandPixels?
                "../images/greenTick.png":"../images/redTick.png"} alt="" height="30px" width="30px"/>
            </div>
            <div className={classes.innersecondFifthContainer}>
              <p className='txtWidth'>
              7+ images.
              </p>
              <img src={imgTest.sevenImages?
                "../images/greenTick.png":"../images/redTick.png"} alt="" height="30px" width="30px"/>
            </div>
          </div>
        </div>

        <div className={classes.fifthContainer} style={{marginTop:"80px"}}>
          <div className={classes.innerFifthContainer}>
            <div className={classes.innersecondFifthContainer}>
              <h2 className={classes.wid} >Ratings</h2>
              {/* <div
                className={
                  listingDetails &&
                  rating &&
                  parseInt(rating.replace(',', '').replace(' ratings', '')) >= 4
                    ? `${classes.greenGood}`
                    : classes.redGood
                }
              >
                {listingDetails &&
                rating &&
                parseInt(rating.replace(',', '').replace(' ratings', '')) >= 4
                  ? `Good`
                  : 'Poor'}
              </div> */}
            </div>
            {/* <div className={classes.innersecondFifthContainer}> */}
              {/* {listingDetails &&
              rating &&
              parseInt(rating.replace(',', '').replace(' ratings', '')) >= 4 ? (
                <p>
                  This is a good listing as the listing has 4+ average star
                  rating.
                </p>
              ) : (
                <p>
                  This is a poor listing as the listing doesnot have 4+ average
                  star rating.
                </p>
              )} */}
              {/* <img src= {listingDetails&&rating&&parseInt(rating.replace(",", "").replace(" ratings", ""))>=4?"../images/Oval.png":"../images/Frame 1000003793.png"} alt="" height="72px" width="72px"/> */}
              <div className={classes.innersecondFifthContainer}>
              <p className='txtWidth'>
              4+ average star ratings.
              </p>
              <img src={listingDetails &&
              rating &&parseInt(rating.replace(',', '').replace(' ratings', '')) >= 4?
                "../images/greenTick.png":"../images/redTick.png"} alt="" height="30px" width="30px"/>
            </div>
            {/* </div> */}
          </div>
        </div>

        <div className={classes.fifthContainer} >
          <div className={classes.innerFifthContainer}>
            <div className={classes.innersecondFifthContainer}>
              <h2 className={classes.wid}  >Reviews</h2>
              {/* <div
                className={
                  listingDetails &&
                  totalReviews &&
                  parseInt(totalReviews.match(/(\d+)\s+ratings/)[1]) >= 20
                    ? `${classes.greenGood}`
                    : classes.redGood
                }
              >
                {listingDetails &&
                totalReviews &&
                parseInt(totalReviews.match(/(\d+)\s+ratings/)[1]) >= 20
                  ? 'Good'
                  : 'Poor'}
              </div> */}
            </div>
            {/* <div className={classes.innersecondFifthContainer}>
              {listingDetails &&
              totalReviews &&
              parseInt(totalReviews.match(/(\d+)\s+ratings/)[1]) >= 20 
                 ? (
                <p>This is a good listing as there are 20+ reviews.</p>
              ) : (
                <p>This is a poor listing as there are less than 20 reviews.</p>
              )} */}
              {/* <img src= {listingDetails&&totalReviews&&parseInt(totalReviews.replace(",", "").replace(" ratings", ""))>=20?"../images/Oval.png":"../images/Frame 1000003793.png"} alt="" height="72px" width="72px"/> */}
            {/* </div> */}
            <div className={classes.innersecondFifthContainer}>
              <p className='txtWidth'>
              20+ reviews.
              </p>
              <img src={listingDetails &&
              totalReviews &&
              parseInt(totalReviews.match(/(\d+)\s+ratings/)[1]) >= 20 ?
                "../images/greenTick.png":"../images/redTick.png"} alt="" height="30px" width="30px"/>
            </div>
          </div>
        </div>
      </Container>
      </>):null};
      {/* <Container fixed  className="container">
        <div className={`${classes.fifthContainer} ${classes.relative}`}>
        <motion.img
              src="../images/newRock2@3x.png"
              className={classes.imageLines11}
              initial="hidden"
              animate="show"
              width="100px"
              height="100px"
            ></motion.img>
            
            <motion.img
              src="../images/rock_branchwork_yellow_Cube.png"
              className={classes.imageLines12}
              initial="hidden"
              animate="show"
            ></motion.img>
            <motion.img
              src="../images/Ellipse 64@3x.png"
              className={classes.imageLines9}
              initial="hidden"
              animate="show"
            ></motion.img>
             <motion.img
              src="../images/Ellipse 62@3x.png"
              className={classes.imageLines10}
              initial="hidden"
              animate="show"
      
            ></motion.img>
          <div className={classes.fifthHeading}>
          
            <div className={classes.fifthMainHeading}>Why you need to optimize your listing</div>
            <p style={{textAlign:"center",width:"80%"}}>Listing optimization boosts success and enhances buying experience. It increases visibility, builds trust, differentiates, improves conversions, and adapts to market changes.</p>
          </div>
          <div className={classes.fifthInner}>
            <div>
              <h2  style={{marginBottom:"40px"}}>Discoverability - The Listing Visibility</h2>
              {
            points.map((item, index) => {
              return(
                <Box onMouseEnter={() => setImage(points[index]?.image)} onMouseLeave={() => setImage(points[selectedIndex]?.image)} key={item?.para} style={{display:'flex', gap:"15px"}}>
                  <Box style={{display:'flex', flexDirection:'column', alignItems:"center"}}>
                    <Box style={{width:"20px", height:'20px', borderRadius:"50%", border:`6px solid ${ selectedIndex>=index ? "#5856e9" : "#D1D1D1"}`,cursor:"pointer"}} onClick={()=>{setImage(points[index].image);setSelectedIndex(index);}}/>
                    <Box style={{width:"2px", height:'50px', backgroundColor: selectedIndex>index ? "#5856e9" : "#D1D1D1", display: index===points.length-1 ? "none" : "block" }}/>
                  </Box>
                  <Box style={{height:index===points.length-1 ? "auto" : "50px", width:"100%", position:"relative", top:"-10px"}}>
                    <FontWrapper>
                    <Typography fontSize="14px" fontFamily="Montserrat" color="#828490" style={{cursor:"pointer"}} className="whyus-para" onClick={()=>{setImage(points[index]?.image);setSelectedIndex(index);}}>{item?.para}</Typography>
                    </FontWrapper>
                  
                    </Box>
                </Box>
              )
            })
          }
            </div>
            <div>
            <h2 style={{marginBottom:"40px"}}>Desirability - On Page Factors</h2>
            {
            points.map((item, index) => {
              return(
                <Box onMouseEnter={() => setImage(points[index]?.image)} onMouseLeave={() => setImage(points[selectedIndex]?.image)} key={item?.para} style={{display:'flex', gap:"15px"}}>
                  <Box style={{display:'flex', flexDirection:'column', alignItems:"center"}}>
                    <Box style={{width:"20px", height:'20px', borderRadius:"50%", border:`6px solid ${ selectedIndex>=index ? "#5856e9" : "#D1D1D1"}`,cursor:"pointer"}} onClick={()=>{setImage(points[index].image);setSelectedIndex(index);}}/>
                    <Box style={{width:"2px", height:'50px', backgroundColor: selectedIndex>index ? "#5856e9" : "#D1D1D1", display: index===points.length-1 ? "none" : "block" }}/>
                  </Box>
                  <Box style={{height:index===points.length-1 ? "auto" : "50px", width:"100%", position:"relative", top:"-10px"}}>
                    <FontWrapper>
                    <Typography fontSize="14px" fontFamily="Montserrat" color="#828490" style={{cursor:"pointer"}} className="whyus-para" onClick={()=>{setImage(points[index]?.image);setSelectedIndex(index);}}>{item?.para}</Typography>
                    </FontWrapper>
                  
                    </Box>
                </Box>
              )
            })
          }
            </div>
          </div>
        </div>
      </Container> */}

      <Container>
        <div className={classes.sixthContainer}>
          <h1>FAQS</h1>
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography id='select-font-faq'>
                  {' '}
                  Does the Amazon Listing Optimization tool work for all the
                  Amazon marketplaces?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='select-font'>
                  If your workplace involves selling products on Amazon,
                  utilising listing optimization tools can be highly
                  advantageous. They can assist you in improving your product
                  listings, attracting more potential customers, and increasing
                  sales. However, if your workplace does not involve selling
                  products on Amazon or within the e-commerce industry, these
                  tools may not be directly applicable to your specific business
                  needs.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography id='select-font-faq'>
                  What are the qualities of a good Amazon listing?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='select-font'>
                  A good Amazon listing should have several key qualities. It
                  should be concise and clear, providing relevant information
                  about the product. The title should be descriptive and include
                  keywords. High-quality images showcasing the product from
                  different angles are essential. The listing should have
                  accurate and detailed product descriptions, highlighting
                  features and benefits. Including customer reviews and ratings
                  helps build trust. Additionally, competitive pricing,
                  well-organised bullet points, and effective use of search
                  terms can improve visibility and attract potential buyer.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography id='select-font-faq'>
                  How to optimize Amazon Listings?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='select-font'>
                  To optimise Amazon listings, focus on keyword research to
                  include relevant terms in titles, bullet points, and
                  descriptions. Write compelling and concise product
                  descriptions, use high-quality images, and request customer
                  reviews. Optimise backend search terms, leverage enhanced
                  brand content, and monitor and adjust your listings regularly
                  for better performance.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography id='select-font-faq'>
                  How does Amazon decide the ranking of my products?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='select-font'>
                  Amazon determines the ranking of products based on various
                  factors including relevance, sales performance, customer
                  reviews, pricing, and availability. The algorithm takes into
                  account the product's title, description, and keywords, as
                  well as the seller's performance metrics. Factors like
                  conversion rate, customer satisfaction, and fulfilment method
                  also play a role. Continuous optimization and updates to the
                  algorithm influence the ranking of products on Amazon's
                  platform.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </Container>
      <Container className={classes.relative} style={{ marginTop: '50px' }}>
        <motion.img
          src='../images/Frame 56.png'
          className={classes.imageLines4}
          initial='hidden'
          animate='show'
          width='100%'
        ></motion.img>
        <div>
          <div>
            <h3>Try out other resources for your business</h3>
          </div>

          <div className={classes.innerSeventh}>
            <div
              className={`${classes.img} ${classes.index} pointer`}
              onClick={() => navigate('/home/fbaCalculator')}
            >
              <img
                src='../images/Rectangle first.png'
                alt='img'
                className={classes.imges}
              ></img>
              <p> Resources</p>
              <h2> FBA Calculator</h2>
            </div>
            <div
              className={`${classes.img} ${classes.index} pointer`}
              onClick={() => navigate('/home/descriptionToCode')}
            >
              <img
                src='../images/unsplash_s8HyIEe7lF0.png'
                alt='img'
                className={classes.imges}
              ></img>
              <p> Resources</p>
              <h2>Description to code</h2>
            </div>
          </div>
        </div>
      </Container>
    </ListContainer>
  )
}
const ListContainer = styled.div`
  .container {
    margin: auto;
    padding-top: 80px;
    position: relative;
    .hero_wrapper {
      display: flex;
      gap: 70px;
      align-items: center;
      justify-content: space-evenly;
      @media (max-width: 600px) {
        flex-direction: column;
        justify-content: center;
      }

      .info-box_FBA {
        @media (max-width: 600px) {
          width: 100%;
        }
        width: 50%;
        .fba-Title {
          //styleName: Display P 40;
          font-family: Poppins-Bold;
          font-size: 40px;
          font-weight: 700;
          line-height: 50px;
          letter-spacing: 0.25px;
          padding-bottom: 24px;
        }

        .fba-subTitle {
          stylename: Body M 16;
          font-family: Montserrat;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0.25px;
          padding-bottom: 24px;
        }
        .input-field {
          display: flex;
          gap: 15px;
          justify-content: flex-start;
          width: 100%;
          gap: 10px;

          input {
            background: #e0e0e0;
            width: 100%;
            border: none;
            &::placeholder {
              color: #828282;
            }
            &:focus {
              outline: none;
            }
          }

          @media (max-width: 600px) {
            width: 100%;
            padding-left: unset;
            flex-direction: column;
            gap: 15px;
            align-items: center;
            justify-content: center;
          }

          .btn_FBACalculate {
            background-color: #5956e9;
            height: 55px;
            color: #e0e0e0;
            border: 0px;
            border-radius: 10px;
            font-family: Poppins;
            font-size: 12px;
            font-weight: 500;
            line-height: 18px;
            letter-spacing: 0.01em;
            text-align: center;
            margin-right: 50px;
            cursor: 'pointer';
          }
        }
      }
      .box {
        width: 50%;
        position: relative;
        @media (max-width: 600px) {
          width: 100%;
          justify-content: center;
        }
      }
      .hoverimg {
        width: 100%;
      }
    }
  }
`
const FontWrapper = styled.div`
  .whyus-title {
    @media (max-width: 600px) {
      font-size: 14px;
      margin: '100px';
    }
  }

  .whyus-para {
    @media (max-width: 600px) {
      font-size: 11px;
    }
  }
`

export default ListCalc
