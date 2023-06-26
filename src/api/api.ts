import axios from "axios";
import {TOKEN} from "../constants/actionTypes"

const API = axios.create({
    
    baseURL: 'http://lb-eservz-1246575002.ap-south-1.elb.amazonaws.com:1337',
    // baseURL: 'http://localhost:1337',
    
  });
  
  API.interceptors.request.use((req) => { 
      req.headers.authorization = `bearer ${TOKEN}`;
    return req;
  });

export const fetchPost=()=>API.get(`api/sitecounters`);
export const fillForm=(data:any)=>API.post(`api/send-mails/sendmail`,data);
export const clientList=()=>API.get(`api/clients`);
export const testimonials=()=>API.get(`api/testimonials`);
export const sitecounters=()=>API.get(`api/sitecounters`);
export const blogs=()=>API.get(`api/blogs`);  

// export const fetchNews=()=>API.get(`api/latest-newsses/rss-feed`);
export const fetchNews=()=>API.get(`api/latest-newsses/latest-news`);

// ####### ----  FBA   -----#######################
export const fetchProductDetails=(asin:any,country:any)=>API.get(`api/fbas/getDetails/${asin}?country=${country} `);
export const fetchProductPriceDetails=(asin:any,country:any)=>API.get(`api/fbas/getPriceDetails/${asin}?country=${country}`);
export const fetchProductProgramDetails=(asin:any,country:any)=>API.get(`api/fbas/getProgramDetails/${asin}?country=${country}`);
export const fetchProductFeesDetails=(data:any,country:any)=>API.post(`api/fbas/feesDetails?country=${country}`,data);
// ####### ----  Price-Listing   -----#######################
export const fetchListingDetails=(asin:any,country:any)=>API.get(`api/price-listing/${asin}?country=${country}`);
