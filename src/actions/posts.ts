import { Dispatch ,AnyAction} from 'redux';
import * as api from '../api/api';
import {FETCH_POST,
    FILL_FORM,
    CLIENT_LIST,
    TESTIMONIALS,
     SITE_COUNTERS,
     FETCH_NEWS,
     FETCH_BLOGS,
     PRODUCT_DETAILS,
     PRODUCT_PRICE,
     PRODUCT_PROGRAM,
     PRODUCT_FEES,
     LISTING_DETAILS,
     FETCH_WORKS,
     FETCH_SINGLE_WORKS,
     FETCH_CATEGORY
    } from "../constants/actionTypes";



export const getPost=()=>async (dispatch:Dispatch<AnyAction>)=>{
    
    try {
        // dispatch({type:START_LOADING});
       let {data}=await api.fetchPost();
        dispatch({type:FETCH_POST,payload:data});
        // dispatch({type:END_LOADING});
    } catch (error) {
        console.error(error);
    }
}

export const postForm=(payload:any)=>async (dispatch:Dispatch<AnyAction>)=>{
    try {
       let {data}=await api.fillForm(payload);
    dispatch({type:FILL_FORM,payload:data});
    return data;
    } catch (error) {
        console.error(error);
    }
}

export const clients=()=>async (dispatch:Dispatch<AnyAction>)=>{
    try {
       let {data}=await api.clientList();
    dispatch({type:CLIENT_LIST,payload:data});
    } catch (error) {
        console.error(error);
    }
}

export const testimonialPlay=()=>async (dispatch:Dispatch<AnyAction>)=>{
    try {
       let {data}=await api.testimonials();
      dispatch({type:TESTIMONIALS,payload:data});
      return data;
    } catch (error) {
        console.error(error);
    }
}

export const siteCounters=()=>async (dispatch:Dispatch<AnyAction>)=>{
    try {
       let {data}=await api.sitecounters();
    dispatch({type:SITE_COUNTERS,payload:data});
    } catch (error) {
        console.error(error);
    }
}
export const fetchNews=()=>async (dispatch:Dispatch<AnyAction>)=>{
    try {
       let {data}=await api.fetchNews();
    dispatch({type:FETCH_NEWS,payload:data});
    return data;
    } catch (error) {
        console.error(error);
    }
}
export const fetchBlogs=()=>async (dispatch:Dispatch<AnyAction>)=>{
    try {
       let {data}=await api.blogs();
    dispatch({type:FETCH_BLOGS,payload:data});
    } catch (error) {
        console.error(error);
    }
}
export const fetchWorks=(first:boolean, second:boolean, firstValue:string, secondValue:string)=>async (dispatch:Dispatch<AnyAction>)=>{
    try {
       let {data}=await api.ourGreatWorks(first, second, firstValue, secondValue);
    dispatch({type:FETCH_WORKS,payload:data});
    return data;
    } catch (error) {
        console.error(error);
    }
}
export const fetchCategories=()=>async (dispatch:Dispatch<AnyAction>)=>{
    try {
       let {data}=await api.category();
    dispatch({type:FETCH_CATEGORY,payload:data});
    return data;
    } catch (error) {
        console.error(error);
    }
}
export const fetchSingleWorks=(id:number)=>async (dispatch:Dispatch<AnyAction>)=>{
    try {
       let {data}=await api.ourSingleGreatWorks(id);
    dispatch({type:FETCH_SINGLE_WORKS,payload:data});
    return data;
    } catch (error) {
        console.error(error);
    }
}

// ############################-------FBA-ACTIONS---------------###########
export const fetchProductDetails=(asin:any,country:any)=>async (dispatch:Dispatch<AnyAction>)=>{
    try {
       let {data}=await api.fetchProductDetails(asin,country);
    dispatch({type:PRODUCT_DETAILS,payload:data});
    return data;
    } catch (error) {
        console.error(error);
    }
}
export const fetchProductPriceDetails=(asin:any,country:any)=>async (dispatch:Dispatch<AnyAction>)=>{
    try {
       let {data}=await api.fetchProductPriceDetails(asin,country);
    dispatch({type:PRODUCT_PRICE,payload:data});
    return data;
    } catch (error) {
        console.error(error);
    }
}
export const fetchProductProgramDetails=(asin:any,country:any)=>async (dispatch:Dispatch<AnyAction>)=>{
    try {
       let {data}=await api.fetchProductProgramDetails(asin,country);
    dispatch({type:PRODUCT_PROGRAM,payload:data});
    return data;
    } catch (error) {
        console.error(error);
    }
}
export const fetchProductFeesDetails=(body:any,country:any)=>async (dispatch:Dispatch<AnyAction>)=>{
    try {
       let {data}=await api.fetchProductFeesDetails(body,country);
    dispatch({type:PRODUCT_FEES,payload:data});
    return data;
    } catch (error) {
        console.error(error);
    }
}
// ############################-------Listing-ACTIONS---------------###########
export const fetchListingDetails=(asin:any,country:any)=>async (dispatch:Dispatch<AnyAction>)=>{
    try {
       let {data}=await api.fetchListingDetails(asin,country);
    dispatch({type:LISTING_DETAILS,payload:data});
    return data;
    } catch (error) {
        console.error(error);
    }
}