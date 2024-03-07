import { ADDEVENT_SUCCESS, ADDUSER_SUCCESS, ADD_KasabaTotal_SUCCESS, ADD_KothrudTotal_SUCCESS, ADD_PRODUCT_SUCCESS, ADD_Total_SUCCESS, ADD_WarjeTotal_SUCCESS, API_SUCCESS, EDITEVENT_SUCCESS, EDIT_SUCCESS, EVENT_SUCCESS, GETACTIVEUSER_SUCCESS, GETUSER_SUCCESS, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST} from "./actiontype";

const initialstate = {
    isLoading : false,
    isError : false,
    products : [],
    totalCount: 0,
    kothrudCount:0,
    kasabaCount:0,
    warjeCount:0,
    err:{},
    apidata:[],
    eddata:[],
    eventdata:[],
    userdata:[],
    activeeventsdata:[]
}
export const reducer = (state=initialstate, {type, payload}) =>{
    switch(type){
        case PRODUCT_REQUEST : 
            return {...state, isLoading : true};
        case ADD_PRODUCT_SUCCESS :
            return {...state, isLoading:false};
        case ADD_Total_SUCCESS :
            return {...state, isLoading:false,totalCount:payload};
        case ADD_KothrudTotal_SUCCESS :
            return {...state, isLoading:false,kothrudCount:payload};
        case ADD_KasabaTotal_SUCCESS :
            return {...state, isLoading:false,kasabaCount:payload};
        case ADD_WarjeTotal_SUCCESS :
            return {...state, isLoading:false,warjeCount:payload};
        case API_SUCCESS :
            return {...state, isLoading:false,apidata:payload};
        case EDIT_SUCCESS :
            return {...state, isLoading:false,eddata:payload};
        case EVENT_SUCCESS :
            return {...state, isLoading:false,eventdata:payload};
        case ADDEVENT_SUCCESS :
            return {...state, isLoading:false};
        case EDITEVENT_SUCCESS :
            return {...state, isLoading:false};
        case ADDUSER_SUCCESS :
            return {...state, isLoading:false,userdata:payload};
        case GETUSER_SUCCESS :
            return {...state, isLoading:false};
        case GETACTIVEUSER_SUCCESS :
            return {...state, isLoading:false,activeeventsdata:payload};
        case PRODUCT_FAILURE :
            return {...state, isError : true,err:payload}
        
        default :
            return initialstate;
    }
}