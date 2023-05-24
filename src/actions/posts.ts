import { Dispatch ,AnyAction} from 'redux';
import * as api from '../api/api';
import {FETCH_POST,FILL_FORM,CLIENT_LIST,TESTIMONIALS, SITE_COUNTERS,FETCH_NEWS,FETCH_BLOGS} from "../constants/actionTypes";



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