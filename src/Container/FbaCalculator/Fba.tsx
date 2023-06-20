import { Container, Typography,Box,Switch } from "@mui/material";
import React,{useEffect,useState} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchProductDetails,fetchProductPriceDetails,fetchProductProgramDetails,fetchProductFeesDetails } from "../../actions/posts";
import { useNavigate } from "react-router-dom";
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator'


export const Fba = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [image, setImage] = useState<string>('/images/work1.png')
 const navigate=useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const classes = useStyles();
  const points = [
    {
      para : "Requires strong management skills for shipments and customer service.",
      image : "/images/work1.png"
    },
    {
      para : "Offers more flexibility and control over inventory, packaging, and shipping.",
      image : "/images/work2.png"
    },
    {
      para : "Suitable for products with lower profit margins.",
      image : "/images/work3.png"
    },
    {
      para : "Charges fees for various services.",
      image : "/images/work4.png"
    }
  ]
  const points2 = [
    {
      para : "Provides faster delivery and wider customer base.",
      image : "/images/work1.png"
    },
    {
      para : "Provides access to Prime eligibility and BuyBox advantage.",
      image : "/images/work2.png"
    },
    {
      para : "Beneficial for new and high-volume sellers, large or expensive products.",
      image : "/images/work3.png"
    },
    {
      para : "Doesn’t charge numerous fees for various services.",
      image : "/images/work4.png"
    }
  ]
  function showElistratorOnSomeInterval(){

    if(selectedIndex ===0 || selectedIndex <=3){

      setTimeout(()=>{
        setSelectedIndex(1)
        setImage("/images/work2.png")
      },2000)
  
  
      setTimeout(()=>{
        setSelectedIndex(2)
        setImage("/images/work3.png")
      },4000)
  
  
      setTimeout(()=>{
        setSelectedIndex(3)
        setImage("/images/work4.png")
      },6000)

      setTimeout(()=>{
        setSelectedIndex(0)
        setImage("/images/work1.png")
      },8000)

    }
  }

  if(selectedIndex === 0){
    showElistratorOnSomeInterval()
  }
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated");
          entry.target.classList.add("animate__fadeIn");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".bannerList_hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);


  // const response=useSelector((state:any)=>state?.posts?.fetchBlogs?.data);
  
  const dispatch: Dispatch<any> = useDispatch();

  const [value,setValue]=useState("");
  const [country,setCountry]=useState("US");
  const [loader, setLoader] = useState(false);
  const[pDetails,setpDetails]=useState<any>(null); 
  const[prDetails,setprDetails]=useState<any>(null); 
  const[prgDetails,setprgDetails]=useState<any>(null); 
  const[pfeeDetails,setpfeeDetails]=useState<any>(null); 

  const changeHandlar=(e:any)=>{
    setValue(e.target.value)
  }
  const countryHandlar=(e:any)=>{
   e.target.checked?setCountry("IN"):setCountry("US")
  }
  useEffect(() => {
    window.scrollTo(0, 700);
  }, [loader]);
  
  const fetch=async()=>{
    setLoader(true);
    const productDetails:any=await dispatch(fetchProductDetails(value,country));
    setpDetails(productDetails);
    const priceDetails:any=await dispatch(fetchProductPriceDetails(value,country));
    setprDetails(priceDetails);
    
    
    const programDetails:any=await dispatch(fetchProductProgramDetails(value,country));
    setprgDetails(programDetails);

    let data={
      countryCode:productDetails?.data?.countryCode,
      itemInfo: {
        asin: productDetails?.data?.searchKey,
        glProductGroupName: productDetails?.data?.otherProducts?.products[0]?.gl,
        packageLength:productDetails?.data?.otherProducts?.products[0]?.length,
        packageWidth: productDetails?.data?.otherProducts?.products[0]?.width,
        packageHeight:productDetails?.data?.otherProducts?.products[0]?.height,
        dimensionUnit: productDetails?.data?.otherProducts?.products[0]?.dimensionUnit,
        packageWeight: productDetails?.data?.otherProducts?.products[0]?.weight,
        weightUnit: productDetails?.data?.otherProducts?.products[0]?.weightUnit,
        afnPriceStr: priceDetails?.data?.price?.amount,
        mfnPriceStr: priceDetails?.data?.price?.amount,
        mfnShippingPriceStr:priceDetails?.data?.shipping?.amount,
        currency:country==="US"?"USD":"INR" ,
        isNewDefined: false,
      },
      programIdList:[
        "MFN",
        "Core"]
    }
    const productFees:any=await dispatch(fetchProductFeesDetails(data,country));
    setpfeeDetails(productFees);
    setLoader(false); 
  
  }
  const isUsernameUnique = (value:any) => {
    return value.trim() !== '';
  };
  const minTen = (value:any) => {
    return value.match(/^[^\s]{10}$/);
  };

  ValidatorForm.addValidationRule('isUsernameUnique', isUsernameUnique);
  ValidatorForm.addValidationRule('minTen', minTen);
  return (
    <FbaContainer className="margin-nav" style={{ backgroundColor: "#FFFCFC",width:"100vw"}}>
       {loader && (
                <div className="mainPreloaderMain">
                    <div className="mainPreloader">
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
      <Container  className="container" >
        <div className="hero_wrapper">
          <div className="info-box_FBA">
            <div className="fba-Title">FBA Calculator</div>
            <div className="fba-subTitle">
              Check the profit a product can earn using fulfillment-by-Amazon
              (FBA)
            </div>  
            US product<Switch  
            onChange={countryHandlar} />Indian Product
            
              {/* <input
                type="text"
                placeholder="Enter Amazon Product's ASIN Number"
                value={value}
                onChange={changeHandlar}
                className="input"
                style={{padding:"20px"}}
              ></input> */}
               <ValidatorForm className="input-field" onSubmit={fetch}>
               <TextValidator
                   placeholder="Enter Amazon Product's ASIN Number"
                    name="message"
                    type="text"
                    value={value}
                    style={{borderRadius:"5px",width:"305px"}}
                    className="input"
                    onChange={changeHandlar}
                    validators={['required','isUsernameUnique','minTen']}
                    errorMessages={['This field is required','Blank spaces are not allowed','A valid ASIN no contain 10 digits and no white spaces']}
                />
                
              <button 
              // disabled={!value||value?.length<10||value.length>10}
              className="btn_FBACalculate pointer"
              >Calculate</button>
              </ValidatorForm>
            
          </div>
          <div className="box " style={{zIndex:"1"}}>
            <motion.img
              src="../images/Rock2@3x.png"
              className={classes.heroRock}
              initial="hidden"
              animate="show"
            ></motion.img>
        <motion.img
              src="../images/Ellipse 75@3x.png"
              className={classes.heroCircle}
              initial="hidden"
              animate="show"
            ></motion.img>
              <img
                src="../images/8 - Lucas Dancing.png"
                className="hoverimg"
                alt="img"
              ></img>
          </div>
        </div>
       
        <motion.img
              src="../images/Group 38594.png"
              className={classes.imageLines1}
              initial="hidden"
              animate="show"
              width="100%"
            ></motion.img>  
             <motion.img
              src="../images/Ellipse 63@3x.png"
              className={classes.imageLines7}
              initial="hidden"
              animate="show"
            ></motion.img>
      </Container>
      <Container fixed className="container">
        <div className={classes.wrapper}>
          <div className={`${classes.img} ${classes.index}`}>
            <img src=
            {pDetails&&pDetails?.data?.otherProducts?.products[0]?.imageUrl?
              pDetails?.data?.otherProducts?.products[0]?.imageUrl:
              "../images/61+lhpMw+2L 1.png"}
              alt="img"
             height="100px" 
             width="100px"></img>
            {/* <motion.img
              src="../images/Ellipse 75@3x.png"
              className={classes.imageLines3}
            ></motion.img> */}
          </div>
          

          <div className={classes.innerWrapper}>
          {/* <motion.img
              src="../images/Ellipse 64.png"
              className={classes.imageLines13}
              initial="hidden"
              animate="show"
            ></motion.img> */}
            
            <div >
              <h2> {pDetails&&pDetails?.data?.otherProducts?.products[0]?.title?
              pDetails?.data?.otherProducts?.products[0]?.title:
              "Your product is going to list here"}</h2>
            </div>
            <div className={classes.items}>
              <div>
                <h3>Customer Reviews Count</h3>
                <p> {pDetails&&pDetails?.data?.otherProducts?.products[0]?.customerReviewsCount?
              pDetails?.data?.otherProducts?.products[0]?.customerReviewsCount:
              "-"}</p>
              </div>
              <div >
                <h3>Product Id</h3>
                <p>{pDetails&&pDetails?.data?.otherProducts?.products[0]?.asin?
              pDetails?.data?.otherProducts?.products[0]?.asin:
              "-"}</p>
              </div>
              <div>
                <h3>Price</h3>
                <p>{country==="US"?"$":"₹"}{prDetails&&prDetails?.data?.price?.amount?
              prDetails?.data?.price?.amount:
              "0"}</p>
              </div>
              <div>
                <h3>Ratings</h3>
                <p>{pDetails&&pDetails?.data?.otherProducts?.products[0]?.customerReviewsRating
?
              pDetails?.data?.otherProducts?.products[0]?.customerReviewsRating
              :
              "-"}</p>
              </div>
              {/* <div>
                <p>offers</p>
                <p>{pDetails&&pDetails?.data?.otherProducts?.products[0]?.offerCount
?
              pDetails?.data?.otherProducts?.products[0]?.offerCount
              :
              "-"}</p>
              </div> */}
            </div>
        
          </div>
          {/* <motion.img
              // src="../images/FullRock1@3x.png"
              className={classes.imageLines14}
              initial="hidden"
              animate="show"
            ></motion.img> */}
        </div>
      </Container>
      <Container className='container'>
        <div className={classes.monitor}>
        
        {/* <motion.img
              src="../images/Group 38632@3x.png"
              className={classes.imageLines}
              initial="hidden"
              animate="show"
              width="80%"
            ></motion.img>  */}
          <div className={classes.firstRow}>
                        <h1>Labels</h1>
            <div className={classes.write}>Item Price</div>
            <div className={classes.write}>Referral Fee</div>
            <div className={classes.write}>Fixed Closing Fee</div>
            <div className={classes.write}>Variable Closing Fee</div>
            <div className={classes.write}>Amazon Fulfillment Fees</div>
            <div className={classes.write}>Storage Cost</div>
            <div className={classes.write}>Other Cost</div>
            {/* <div className={classes.write}>Total fulfillment cost</div>
            <div className={classes.write}>Selling proceeds</div>
            <div className={classes.write}>Cost of product</div> */}
          </div>
           

          <div className={classes.thirdRow}>
              <h1>FBA</h1>


              <div className={classes.input}>
              <select value={country==="US"?"option1":"option2"}className={classes.selector}>
              <option value="option1"> $</option>
              <option value="option2"> ₹</option>
              </select>
              <input
                value={prDetails&&prDetails?.data?.price?.amount?
                (prDetails?.data?.price?.amount).toFixed(2):
                "0"}
              type="text" className={classes.input}/>
              </div>


              <div className={classes.input}>
              <select value={country==="US"?"option1":"option2"}className={classes.selector}>
              <option value="option1"> $</option>
              <option value="option2"> ₹</option>
              </select>
              <input
              value={pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.Core?.otherFeeInfoMap?.ReferralFee
                ?.total?.amount?
                (pfeeDetails?.data?.programFeeResultMap?.Core?.otherFeeInfoMap?.ReferralFee
                ?.total?.amount).toFixed(2):
                "0"} 
              
              type="text" className={classes.input}/>
              </div>

              
              <div className={classes.input}>
              <select value={country==="US"?"option1":"option2"}className={classes.selector}>
              <option value="option1"> $</option>
              <option value="option2"> ₹</option>
              </select>
              <input
                 value={pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.Core?.otherFeeInfoMap?.FixedClosingFee
                  ?.total?.amount?
                  (pfeeDetails?.data?.programFeeResultMap?.Core?.otherFeeInfoMap?.FixedClosingFee
                  ?.total?.amount).toFixed(2):
                  "0"} 
              type="text" className={classes.input}/>
              </div>

             
              <div className={classes.input}>
              <select value={country==="US"?"option1":"option2"}className={classes.selector}>
              <option value="option1"> $</option>
              <option value="option2"> ₹</option>
              </select>
              <input
                value={pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.Core?.otherFeeInfoMap?.VariableClosingFee
                  ?.total?.amount?
                  (pfeeDetails?.data?.programFeeResultMap?.Core?.otherFeeInfoMap?.VariableClosingFee
                  ?.total?.amount).toFixed(2):
                  "0"}
              type="text" className={classes.input}/>
              </div>

              <div className={classes.input}>
              <select value={country==="US"?"option1":"option2"}className={classes.selector}>
              <option value="option1"> $</option>
              <option value="option2"> ₹</option>
              </select>
              <input
                 value={pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.Core?.otherFeeInfoMap?.FulfillmentFee?.total?.amount?
                  (pfeeDetails?.data?.programFeeResultMap?.Core?.otherFeeInfoMap?.FulfillmentFee  
                  ?.total?.amount).toFixed(2):
                  "0"}
              type="text" className={classes.input}/>
              </div>


              <div className={classes.input}>
              <select value={country==="US"?"option1":"option2"}className={classes.selector}>
              <option value="option1"> $</option>
              <option value="option2"> ₹</option>
              </select>
              <input
                value={
                  pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.Core?.perUnitNonPeakStorageFee

                  ?.total?.amount?
                  (pfeeDetails?.data?.programFeeResultMap?.Core?.perUnitNonPeakStorageFee

                  ?.total?.amount).toFixed(2):
                  "0"
                }
              type="text" className={classes.input}/>
              </div>

              <div className={classes.input}>
              <select value={country==="US"?"option1":"option2"}className={classes.selector}>
              <option value="option1"> $</option>
              <option value="option2"> ₹</option>
              </select>
              <input
                 value={
                  pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.Core?.otherCost

                  ?.feeAmount?.amount?
                  (pfeeDetails?.data?.programFeeResultMap?.Core?.otherCost

                  ?.feeAmount?.amount).toFixed(2):
                  "0"
                }
              type="text" className={classes.input}/>
              </div>
              
              {/* <div className={classes.input}>
              <select value={country==="US"?"option1":"option2"}className={classes.selector}>
              <option value="option1"> $</option>
              <option value="option2"> ₹</option>
              </select>
              <input
                 value={pfeeDetails&&pfeeDetails?.mfn_fees_detail?.total_fulfillment_cost?
                  pfeeDetails?.mfn_fees_detail?.total_fulfillment_cost:
                  "0"}
              type="text" className={classes.input}/>
              </div>

              <div className={classes.input}>
              <select value={country==="US"?"option1":"option2"}className={classes.selector}>
              <option value="option1"> $</option>
              <option value="option2"> ₹</option>
              </select>
              <input
                  value={pfeeDetails&&pfeeDetails?.mfn_fees_detail?.seller_proceeds?
                    pfeeDetails?.mfn_fees_detail?.seller_proceeds:
                    "0"} 
              type="text" className={classes.input}/>
              </div>

              <div className={classes.input}>
              <select value={country==="US"?"option1":"option2"}className={classes.selector}>
              <option value="option1"> $</option>
              <option value="option2"> ₹</option>
              </select>
              <input
                 value={pfeeDetails&&pfeeDetails?.mfn_fees_detail?.product_cost?
                  pfeeDetails?.mfn_fees_detail?.product_cost:
                  "0"} 
              type="text" className={classes.input}/>
              </div> */}
          </div>
            <div className={classes.secondRow}>
              <h1>FBM</h1>

              <div className={classes.input}>
              <select value={country==="US"?"option1":"option2"}className={classes.selector}>
              <option value="option1"> $</option>
              <option value="option2"> ₹</option>
              </select>
              <input
                value={prDetails&&prDetails?.data?.price?.amount?
                  (prDetails?.data?.price?.amount)?.toFixed(2):
                  "0"}  
              type="text" className={classes.input}/>
              </div>

              


              <div className={classes.input}>
              <select value={country==="US"?"option1":"option2"}className={classes.selector}>
              <option value="option1"> $</option>
              <option value="option2"> ₹</option>
              </select>
              <input
               value={pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.MFN?.otherFeeInfoMap?.ReferralFee
                ?.total?.amount?
                (pfeeDetails?.data?.programFeeResultMap?.MFN?.otherFeeInfoMap?.ReferralFee
                ?.total?.amount).toFixed(2):
                "0"}
              type="text" className={classes.input}/>
              </div>
              
                    
              <div className={classes.input}>
              <select value={country==="US"?"option1":"option2"}className={classes.selector}>
              <option value="option1"> $</option>
              <option value="option2"> ₹</option>
              </select>
              <input
               value={pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.MFN?.otherFeeInfoMap?.FixedClosingFee
                ?.total?.amount?
                (pfeeDetails?.data?.programFeeResultMap?.MFN?.otherFeeInfoMap?.FixedClosingFee
                ?.total?.amount).toFixed(2):
                "0"} 
                 
              type="text" className={classes.input}/>
              </div>

           
              <div className={classes.input}>
              <select value={country==="US"?"option1":"option2"}className={classes.selector}>
              <option value="option1"> $</option>
              <option value="option2"> ₹</option>
              </select>
              <input
                 value={pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.MFN?.otherFeeInfoMap?.VariableClosingFee
                  ?.total?.amount?
                  (pfeeDetails?.data?.programFeeResultMap?.MFN?.otherFeeInfoMap?.VariableClosingFee  
                  ?.total?.amount).toFixed(2):
                  "0"}
              type="text" className={classes.input}/>
              </div>

              
              <div className={classes.input}>
              <select value={country==="US"?"option1":"option2"}className={classes.selector}>
              <option value="option1"> $</option>
              <option value="option2"> ₹</option>
              </select>
              <input
                 value={pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.MFN?.otherFeeInfoMap?.FulfillmentFee?.total?.amount?
                  (pfeeDetails?.data?.programFeeResultMap?.MFN?.otherFeeInfoMap?.FulfillmentFee  
                  ?.total?.amount).toFixed(2):
                  "0"}
              type="text" className={classes.input}/>
              </div>
           

              <div className={classes.input}>
              <select value={country==="US"?"option1":"option2"}className={classes.selector}>
              <option value="option1"> $</option>
              <option value="option2"> ₹</option>
              </select>
              <input
                 value={
                  pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.MFN?.perUnitNonPeakStorageFee

                  ?.total?.amount?
                  (pfeeDetails?.data?.programFeeResultMap?.MFN?.perUnitNonPeakStorageFee

                  ?.total?.amount).toFixed(2):
                  "0"
                }
              type="text" className={classes.input}/>
              </div>

              <div className={classes.input}>
              <select value={country==="US"?"option1":"option2"}className={classes.selector}>
              <option value="option1"> $</option>
              <option value="option2"> ₹</option>
              </select>
              <input
                value={
                  pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.MFN?.otherCost

                  ?.total?.amount?
                  (pfeeDetails?.data?.programFeeResultMap?.MFN?.otherCost

                  ?.total?.amount).toFixed(2):
                  "0"
                }
              type="text" className={classes.input}/>
              </div>

              {/* <div className={classes.input}>
              <select value={country==="US"?"option1":"option2"}className={classes.selector}>
              <option value="option1"> $</option>
              <option value="option2"> ₹</option>
              </select>
              <input
               value={pfeeDetails&&pfeeDetails?.afn_fees_detail?.total_fulfillment_cost?
                pfeeDetails?.afn_fees_detail?.total_fulfillment_cost:
                "0"}  
              type="text" className={classes.input}/>
              </div>


              <div className={classes.input}>
              <select value={country==="US"?"option1":"option2"}className={classes.selector}>
              <option value="option1"> $</option>
              <option value="option2"> ₹</option>
              </select>
              <input
               value={pfeeDetails&&pfeeDetails?.afn_fees_detail?.seller_proceeds?
                pfeeDetails?.afn_fees_detail?.seller_proceeds:
                "0"} 
              type="text" className={classes.input}/>
              </div>


              <div className={classes.input}>
              <select value={country==="US"?"option1":"option2"}className={classes.selector}>
              <option value="option1"> $</option>
              <option value="option2"> ₹</option>
              </select>
              <input
               value={pfeeDetails&&pfeeDetails?.afn_fees_detail?.product_cost?
                pfeeDetails?.afn_fees_detail?.product_cost:
                "0"}
              type="text" className={classes.input}/>
              </div> */}
            </div>

           
            
        </div>
      </Container>
      <Container fixed maxWidth='lg' className="container">
        <div className={classes.twoContainer}>
        <motion.img
              src="../images/line.png"
              className={classes.imageLines2}
              initial="hidden"
              animate="show"
              width="100%"
            ></motion.img>
         
          <div className={classes.innerTwoContainer}>
            <h2>FBA</h2>
            <div className={classes.innerThirdContainer}>
              <div>
                <p>Net Profit</p>
                <h1>{country==="US"?"$":"₹"}{
                pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.Core? (prDetails&&prDetails?.data?.price?.amount-
                    +(pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.Core?.otherFeeInfoMap?.FixedClosingFee
                        ?.total?.amount)-


                +(pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.Core?.otherFeeInfoMap?.ReferralFee
                ?.total?.amount)-

                +(pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.Core?.otherFeeInfoMap?.VariableClosingFee
                  ?.total?.amount)-

                 +(pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.Core?.otherFeeInfoMap?.FulfillmentFee
                 ?.total?.amount)-

                 +(pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.Core?.perUnitNonPeakStorageFee
                  ?.total?.amount)

                //  +(pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.Core?.otherCost?.feeAmount?.amount)
                )?.toFixed(2):0
                }</h1>
              </div>
              <div>
                <p>Net Margin</p>
                <h1>%{
              
              pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.Core?  (100-(( +(pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.Core?.otherFeeInfoMap?.FixedClosingFee
                        ?.total?.amount)+


                +(pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.Core?.otherFeeInfoMap?.ReferralFee
                ?.total?.amount)+

                +(pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.Core?.otherFeeInfoMap?.VariableClosingFee
                  ?.total?.amount)+

                 +(pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.Core?.otherFeeInfoMap?.FulfillmentFee
                 ?.total?.amount)+

                 +(pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.Core?.perUnitNonPeakStorageFee
                  ?.total?.amount)

                //  +(pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.Core?.otherCost?.feeAmount?.amount)
                
               )/ +(prDetails&&prDetails?.data?.price?.amount)*100))?.toFixed(2):0}</h1>
              </div>
            </div>
          </div>
          <div className={classes.innerTwoContainer}>
            <h2>FBM</h2>
            <div className={classes.innerThirdContainer}>
              <div>
                <p>Net Profit</p>
                <h1>{country==="US"?"$":"₹"}{
                  pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?(
                    prDetails&&prDetails?.data?.price?.amount-

                    +(pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.MFN?.otherFeeInfoMap?.FixedClosingFee
                        ?.total?.amount)-


                +(pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.MFN?.otherFeeInfoMap?.ReferralFee
                ?.total?.amount)-

                +(pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.MFN?.otherFeeInfoMap?.VariableClosingFee
                  ?.total?.amount)

                //  +(pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.MFN?.otherFeeInfoMap?.FulfillmentFee
                //  ?.feeAmount?.amount)-

                //  +(pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.MFN?.perUnitNonPeakStorageFee
                //   ?.feeAmount?.amount)

                //  +(pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.MFN?.otherCost?.feeAmount?.amount)
                )?.toFixed(2):0
                }</h1>
              </div>  
              <div>
                <p>Net Margin</p>
                <h1>%{pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?
                (100-(( +(pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.MFN?.otherFeeInfoMap?.FixedClosingFee
                        ?.total?.amount)+


                +(pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.MFN?.otherFeeInfoMap?.ReferralFee
                ?.total?.amount)+

                +(pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.MFN?.otherFeeInfoMap?.VariableClosingFee
                  ?.total?.amount)

                //  +(pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.Core?.otherFeeInfoMap?.FulfillmentFee
                //  ?.feeAmount?.amount)+

                //  +(pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.Core?.perUnitNonPeakStorageFee
                //   ?.feeAmount?.amount)

                //  +(pfeeDetails&&pfeeDetails?.data?.programFeeResultMap?.Core?.otherCost?.feeAmount?.amount)
                
               )/ +(prDetails&&prDetails?.data?.price?.amount)*100))?.toFixed(2):0}</h1>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container fixed  className="container">
        <div className={classes.fifthContainer}>
       
        <motion.img
              src="../images/newRock2@3x.png"
              className={classes.imageLines4}
              initial="hidden"
              animate="show"
              width="100px"
              height="100px"
            ></motion.img>
            
            <motion.img
              src="../images/rock_branchwork_yellow_Cube.png"
              className={classes.imageLines8}
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
            <h1 >FBA v/s FBM</h1>
            <p>which one is right for your bussiness? </p>
          </div>
          <div className={classes.fifthInner}>
            <div>
              <h2 style={{marginBottom:"40px"}}>FBA</h2>
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
              <h2 style={{marginBottom:"40px"}}>FBM</h2>
              {
            points2.map((item, index) => {
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
      </Container>
      <Container fixed className="container">
        <div className={classes.sixthContainer}>
          <div>
            <h1>Other Costs</h1>
            <p>Amazon Sellers analyze pre and post-launch revenue, investigating initial investments, cost, marketing, and other factors like projected sales to understand profit margins. Let's delve into the initial costs associated.</p>          </div>
          <div>
            <div className={classes.sixthRight}>
              <div className={classes.imageTextPara}>
                <img src="../images/User1.png" alt="img" height="61px" width="61px"></img>
                <p>Maintenance Security.</p>
              </div>
              <div className={classes.imageTextPara}>
                <img src="../images/bag-dynamic-color.png" alt="img" height="61px" width="61px"></img>
                <p>Shipping Costs.</p>
              </div>
              <div className={classes.imageTextPara}>
                <img src="../images/locker-dynamic-gradient.png" alt="img" height="61px" width="61px"></img>
                <p>Storage Warehousing Costs.</p>
              </div>
            </div>
            <div className={classes.sixthRight}>
              <div className={classes.imageTextPara}>
                <img src="../images/rupee-dynamic-color.png" alt="img" height="61px" width="61px"></img>
                <p>Costs Of Goods.</p>
              </div>
              <div className={classes.imageTextPara}>
                <img src="../images/megaphone-dynamic-color.png" alt="img" height="61px" width="61px"></img>
                <p>Market Costs Products Ads.</p>
              </div>
              <div className={classes.imageTextPara}>
                <img src="../images/User2.png" alt="img" height="61px" width="61px"></img>
                <p>Product Packing Labelling Cost.</p>
              </div>
            </div>
            <div className={classes.sixthRight}>
              <div className={classes.imageTextPara}>
                <img src="../images/User3.png" alt="img" height="61px" width="61px"></img>
                <p>Product Sample And Product Cost.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="container">
      
        <div>
          <div >
            <h1>Try out other resources for your business</h1>
          </div>

          <div className={classes.innerSeventh} >
            
            <div className={`${classes.img} ${classes.index} pointer`}
            onClick={()=>navigate('/home/listingCalculator')}>

              <img src="../images/Rectangle second.png" alt="img" height="200px" width="368px"></img>
              <p> Resources</p>
              <h2>Optimising Listing Library</h2>
            </div>
            <div className={`${classes.img} ${classes.index} pointer`}
             onClick={()=>navigate('/home/descriptionToCode')}>
              <img src="../images/unsplash_s8HyIEe7lF0.png" alt="img" height="200px" width="368px"></img>
              <p> Resources</p>
              <h2>Desctiption to code</h2>
            </div>
          </div>

        </div>
        <motion.img
              src="../images/Frame 56.png"
              className={classes.imageLines11}
              initial="hidden"
              animate="show"
              width="100%"
            ></motion.img>
      </Container>
    </FbaContainer >

  );
};

const FbaContainer = styled.div`
  .container {
    z-index:1;  
    margin: auto;
    position: relative;
    padding-top: 80px;
    .hero_wrapper {
      display: flex;
      gap:70px;
      position: relative;
      align-items: center;
      justify-content: space-between;
      z-indes:1;
      position: relative;
      @media (max-width: 600px) {
        flex-direction: column;
        justify-content: center;
      }

      .info-box_FBA {
        z-index:1;
        @media (max-width: 600px) {
          width: 100%;
        }
        z-index:1;
        width: 50%;
        .fba-Title {
          //styleName: Display P 40;
          font-family: Poppins-Bold;
          font-size: 40px;
          font-weight: 700;
          line-height: 50px;  
          z-index:1;
          letter-spacing: 0.25px;
          padding-bottom: 24px;
        }

        .fba-subTitle {
          //styleName: Body M 16;
          font-family: Montserrat;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0.25px;
          padding-bottom: 24px;
          z-index:1;
        }
        .input-field {
          display: flex;
          justify-content: flex-start;
          width: 100%;
          gap:10px;
          @media (max-width: 600px) {
            flex-direction: column;
            gap:20px;
          }

          z-index:1;
          .input {
            background: #e0e0e0;
            width: 100%;
            height:55px;
            border: none;
            overflow:visible;
            &::placeholder {
              color: #828282;
            }
            &:focus {
              outline: none;
            }
          }

          
        @media (max-width: 600px) {
          width: 100%;
          padding-left: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
          .btn_FBACalculate {
            background-color: #5956e9;
            color: #e0e0e0;
            border: 0px;
            border-radius: 10px;
            padding: 10px 25px;
            font-family: Poppins;
            font-size: 12px;
            font-weight: 500;
            line-height: 18px;
            letter-spacing: 0.01em;
            text-align: center;
            height:55px;
            cursor: pointer;
            margin-right:50px;
          }
        }
      }
      .box{
        width:50%;
        position: relative;
        @media (max-width: 600px) {
          width: 100%;
          justify-content: center;
        }
      }
      .hoverimg{
        width: 100%;
      }
     
      
    }
    
  }
`;
const FontWrapper=styled.div`
  
  .whyus-title{
    @media (max-width:600px){
      font-size: 14px;
      margin:"100px"
    }
  }

  .whyus-para{
    @media(max-width:600px){
      font-size: 11px;
    }
  }`;
