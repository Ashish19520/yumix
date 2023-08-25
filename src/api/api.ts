import axios from "axios";
import {TOKEN} from "../constants/actionTypes"

export const API = axios.create({
    
    baseURL: 'http://3.108.131.11:1337',
    // baseURL: 'http://localhost:1337',
    
  });
  export const baseUrl='http://3.108.131.11:1337';
  // export const baseUrl='http://localhost:1337';
  
  API.interceptors.request.use((req) => { 
      req.headers.authorization = `bearer ${TOKEN}`;
    return req;
  });

export const fetchPost=()=>API.get(`api/sitecounters`);
export const fillForm=(data:any)=>API.post(`api/send-mails/sendmail`,data);
export const clientList=()=>API.get(`api/clients?populate=*`);
export const testimonials=()=>API.get(`api/testimonials`);
export const sitecounters=()=>API.get(`api/sitecounters`);
export const blogs=()=>API.get(`api/blogs`);   
// export const ourGreatWorks=(first,second,firstValue,secondValue)=>API.get(`api/our-works?filters[Category][$eq]=menFashion&filters[SubCategory][$eq]=formalShirts`);  
export const ourGreatWorks = (first:boolean, second:boolean, firstValue:string, secondValue:string) => {
  let endpoint = 'api/our-works?populate=*';
  let filters = {};

  if (first && second) {
    filters = {
      category:{name:{ $eq: firstValue }},
      SubCategories: { name:{$eq: secondValue }},
    };
  } else if (first) {
    filters ={ category:{name:{ $eq: firstValue }}} ;
  }

  return API.get(endpoint,{ params: { filters } } );
};

export const ourSingleGreatWorks=(id:number)=>API.get(`api/our-works/${id}`);  
export const category=()=>API.get(`api/categories?populate=sub_category`);    

// export const fetchNews=()=>API.get(`api/latest-newsses/rss-feed`);
export const fetchNews=()=>API.get(`api/latest-newsses/latest-news`);

// ####### ----  FBA   -----#######################
export const fetchProductDetails=(asin:any,country:any)=>API.get(`api/fbas/getDetails/${asin}?country=${country} `);
export const fetchProductPriceDetails=(asin:any,country:any)=>API.get(`api/fbas/getPriceDetails/${asin}?country=${country}`);
export const fetchProductProgramDetails=(asin:any,country:any)=>API.get(`api/fbas/getProgramDetails/${asin}?country=${country}`);
export const fetchProductFeesDetails=(data:any,country:any)=>API.post(`api/fbas/feesDetails?country=${country}`,data);
// ####### ----  Price-Listing   -----#######################
export const fetchListingDetails=(asin:any,country:any)=>API.get(`api/price-listing/${asin}?country=${country}`);
