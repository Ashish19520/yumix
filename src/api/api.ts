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
export const blogs=()=>API.get(`api/blogs`);  
export const fetchNews=()=>API.get(`api/latest-newsses`);


