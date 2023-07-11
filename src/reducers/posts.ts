import { FETCH_POST,
    FILL_FORM,
    CLIENT_LIST,
    TESTIMONIALS,
    SITE_COUNTERS,
     FETCH_BLOGS,
     FETCH_NEWS,
     PRODUCT_DETAILS,
     PRODUCT_PRICE,
     PRODUCT_PROGRAM,
     PRODUCT_FEES,
     LISTING_DETAILS,
     FETCH_WORKS,
     FETCH_SINGLE_WORKS,
     FETCH_CATEGORY
    } from "../constants/actionTypes";

export default (state={},action:any)=>{
    switch(action.type){
        case FILL_FORM:
            return {...state,formData:action.payload}
        case CLIENT_LIST:
            return {...state,clientList:action.payload};
        case TESTIMONIALS:
            return {...state, testimonials:action.payload};
        case SITE_COUNTERS:
                return {...state, sitecounters:action.payload};
        case FETCH_NEWS:      
        return {...state, fetchNews:action.payload};
        case FETCH_BLOGS:
        return {...state, fetchBlogs:action.payload};
        case FETCH_WORKS:
        return {...state, fetchWorks:action.payload};
        case FETCH_CATEGORY:
            return {...state, fetchCategory:action.payload};
        case FETCH_SINGLE_WORKS:
        return {...state, fetchSingleWork:action.payload};
        case PRODUCT_DETAILS:
        return {...state, productDetails:action.payload};
        case PRODUCT_PRICE:
        return {...state, productPrice:action.payload};
        case PRODUCT_PROGRAM:
        return {...state, productProgram:action.payload};
        case PRODUCT_FEES:
        return {...state, productFees:action.payload};
        case LISTING_DETAILS:
        return {...state, listingDetails:action.payload};
        default:
            return state;   
    }   
}   