import { FETCH_POST,FILL_FORM,CLIENT_LIST,TESTIMONIALS,SITE_COUNTERS, FETCH_NEWS} from "../constants/actionTypes";

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
        default:
            return state;   
    }   
}   