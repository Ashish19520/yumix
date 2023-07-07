import React,{useEffect,useState}from 'react'
import Content from '../../Components/Content'
import ContactForm from '../../Components/contactForm'
import Footer from '../../Components/Footer'
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { useParams } from 'react-router-dom';
import { fetchSingleWorks } from '../../actions/posts';


function OurWorks1() {
  const dispatch: Dispatch<any> = useDispatch()
  const [data, setData] =useState<any>(null)
  const { id } :any= useParams();
  const itemIdNumber = parseInt(id);

  useEffect(() => {
    fetch()
  }, [data])
  
const fetch = async () => {
  const dat: any = await dispatch(fetchSingleWorks(itemIdNumber))
  setData(dat.data);
}
 let data1={
  img:data?.attributes?.imgPath,
  heading:data?.attributes?.title,
  text:data?.attributes?.subTitle,

 }

  return (
    <div>
      <Content data={data1}/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default OurWorks1
