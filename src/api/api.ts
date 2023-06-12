import axios from "axios";
import {TOKEN} from "../constants/actionTypes"

const API = axios.create({
    baseURL: 'http://52.66.171.52:1337/',
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
export const blogs=()=>API.post(`api/blogs/rss-blog/`);  
export const fetchNews=()=>API.get(`api/latest-newsses/rss-feed`);

// ####### ----  FBA   -----#######################
export const fetchProductDetails=(asin:any,country:any)=>API.get(`api/fbas/getDetails/${asin}?country=${country} `);
export const fetchProductPriceDetails=(asin:any,country:any)=>API.get(`api/fbas/getPriceDetails/${asin}?country=${country}`);
export const fetchProductProgramDetails=(asin:any,country:any)=>API.get(`api/fbas/getProgramDetails/${asin}?country=${country}`);
export const fetchProductFeesDetails=(data:any,country:any)=>API.post(`api/fbas/feesDetails?country=${country}`,data);


