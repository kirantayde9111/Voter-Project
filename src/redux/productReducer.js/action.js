import { ADDEVENT_SUCCESS, ADDUSER_SUCCESS, ADD_KasabaTotal_SUCCESS, ADD_KothrudTotal_SUCCESS, ADD_PRODUCT_SUCCESS, ADD_Total_SUCCESS, ADD_WarjeTotal_SUCCESS, API_SUCCESS, EDITEVENT_SUCCESS, EDITUSER_SUCCESS, EVENT_SUCCESS, GETUSER_SUCCESS, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actiontype"
import axios from "axios";

               const Url="https://mn-data-api.digitaloms.in/v1"
            //    old
            //    const Url="https://mn-data-api.digitaloms.in/v1"
            // new
               ///https://mn-data-staging2-api.digitaloms.in/v1
export const getProduct = (data,yourConfig)=> (dispatch) => {
    dispatch({type:PRODUCT_REQUEST})

    axios.post(`${Url}/visitor`,data,yourConfig)
    .then((res) => {
        console.log(res)
        return (
        dispatch({type:ADD_PRODUCT_SUCCESS, payload:res.data})
        )
    })
    .catch((err)=>{
        console.log(err.response.data
            )
        dispatch({type:PRODUCT_FAILURE,payload:err.response.data})
    });
}

export const getTotalCount = (yourConfig)=> (dispatch) => {
    dispatch({type:PRODUCT_REQUEST})

    axios.get(`${Url}/visitor/totalcount`,yourConfig)
    .then((res) => {
        // console.log(res)
        return (
        dispatch({type:ADD_Total_SUCCESS, payload:res.data})
        )
    })
    .catch((err)=>{
        // console.log(err)
        dispatch({type:PRODUCT_FAILURE,payload:err.response.data})
    });
}
export const getKothrudCount = (yourConfig)=> (dispatch) => {
    dispatch({type:PRODUCT_REQUEST})

    axios.get(`${Url}/visitor/getcount/kothrud`,yourConfig)
    .then((res) => {
        // console.log(res)
        return (
        dispatch({type:ADD_KothrudTotal_SUCCESS, payload:res.data})
        )
    })
    .catch((err)=>{
        // console.log(err)
        dispatch({type:PRODUCT_FAILURE,payload:err.response.data})
    });
}
export const getKasabaCount = (yourConfig)=> (dispatch) => {
    dispatch({type:PRODUCT_REQUEST})

    axios.get(`${Url}/visitor/getcount/kasaba`,yourConfig)
    .then((res) => {
        // console.log(res)
        return (
        dispatch({type:ADD_KasabaTotal_SUCCESS, payload:res.data})
        )
    })
    .catch((err)=>{
        // console.log(err)
        dispatch({type:PRODUCT_FAILURE,payload:err.response.data})
    });
}

export const getWarjeCount = (yourConfig)=> (dispatch) => {
    dispatch({type:PRODUCT_REQUEST})

    axios.get(`${Url}/visitor/getcount/baner`,yourConfig)
    .then((res) => {
        // console.log(res)
        return (
        dispatch({type:ADD_WarjeTotal_SUCCESS, payload:res.data})
        )
    })
    .catch((err)=>{
        // console.log(err)
        dispatch({type:PRODUCT_FAILURE,payload:err.response.data})
    });
}


export const getApi = (yourConfig,data)=> (dispatch) => {
    dispatch({type:PRODUCT_REQUEST})

    axios.get(`${Url}/visitor/search/${data}`,yourConfig)
    .then((res) => {
        console.log(res)
        return (
        dispatch({type:API_SUCCESS, payload:res.data})
        )
    })
    .catch((err)=>{
        // console.log(err)
        dispatch({type:PRODUCT_FAILURE,payload:err.response.data})
    });
}
export const getApiaDATA = (yourConfig)=> (dispatch) => {
    dispatch({type:PRODUCT_REQUEST})

    axios.get(`${Url}/visitor/getAll/`,yourConfig)
    .then((res) => {
        console.log(res)
        return (
        dispatch({type:API_SUCCESS, payload:res.data})
        )
    })
    .catch((err)=>{
        // console.log(err)
        dispatch({type:PRODUCT_FAILURE,payload:err.response.data})
    });
}
export const EditApi = (yourConfig,data)=> (dispatch) => {
    dispatch({type:PRODUCT_REQUEST})

    axios.put(`${Url}/visitor`, data,yourConfig)
    .then((res) => {
        console.log(res)
        return (
        dispatch({type:API_SUCCESS, payload:res.data})
        )
    })
    .catch((err)=>{
        // console.log(err)
        dispatch({type:PRODUCT_FAILURE,payload:err.response.data})
    });
}
export const AddEvents = (data,yourConfig)=> (dispatch) => {
    dispatch({type:PRODUCT_REQUEST})

   return axios.post(`${Url}/events/`, data,yourConfig)
    .then((res) => {
        console.log(res)
        return (
        dispatch({type:ADDEVENT_SUCCESS, payload:res.data})
        )
    })
    .catch((err)=>{
        // console.log(err)
        dispatch({type:PRODUCT_FAILURE,payload:err.response.data})
    });
}
export const getAllEvents = (yourConfig)=> (dispatch) => {
    dispatch({type:PRODUCT_REQUEST})

   axios.get(`${Url}/events/`,yourConfig)
    .then((res) => {
        console.log(res)
        return (
        dispatch({type:EVENT_SUCCESS, payload:res.data})
        )
    })
    .catch((err)=>{
        // console.log(err)
        dispatch({type:PRODUCT_FAILURE,payload:err.response.data})
    });
}


export const EditEvent = (yourConfig,data)=> (dispatch) => {
    dispatch({type:PRODUCT_REQUEST})

    axios.patch(`${Url}/events/${data.id}`, data,yourConfig)
    .then((res) => {
        console.log(res)
        return (
        dispatch({type:EDITEVENT_SUCCESS, payload:res.data})
        )
    })
    .catch((err)=>{
        // console.log(err)
        dispatch({type:PRODUCT_FAILURE,payload:err.response.data})
    });
}

export const AddUsers = (data,yourConfig)=> (dispatch) => {
    dispatch({type:PRODUCT_REQUEST})

   return axios.post(`${Url}/users/`, data,yourConfig)
    .then((res) => {
        console.log(res)
        return (
        dispatch({type:GETUSER_SUCCESS, payload:res.data})
        )
    })
    .catch((err)=>{
        // console.log(err)
        dispatch({type:PRODUCT_FAILURE,payload:err.response.data})
    });
}


export const getUsers = (yourConfig)=> (dispatch) => {
    dispatch({type:PRODUCT_REQUEST})

   axios.get(`${Url}/users/`,yourConfig)
    .then((res) => {
        console.log(res)
        return (
        dispatch({type:ADDUSER_SUCCESS, payload:res.data})
        )
    })
    .catch((err)=>{
        console.log(err?.response.data.statusCode)
        if(err?.response.data.statusCode){
            
        }
        dispatch({type:PRODUCT_FAILURE,payload:err.response.data})
    });
}




export const EditUser = (yourConfig,data)=> (dispatch) => {
    dispatch({type:PRODUCT_REQUEST})

    axios.patch(`${Url}/users/${data.id}`, data,yourConfig)
    .then((res) => {
        console.log(res)
        return (
        dispatch({type:EDITUSER_SUCCESS, payload:res.data})
        )
    })
    .catch((err)=>{
        // console.log(err)
        dispatch({type:PRODUCT_FAILURE,payload:err.response.data})
    });
}


export const getActiveEvents = (yourConfig,id)=> (dispatch) => {
    dispatch({type:PRODUCT_REQUEST})

   axios.get(`${Url}/events/active/1`,yourConfig)
    .then((res) => {
        console.log(res)
        return (
        dispatch({type:GETUSER_SUCCESS, payload:res.data})
        )
    })
    .catch((err)=>{
        console.log(err?.response.data.statusCode)
        if(err?.response.data.statusCode){
            
        }
        dispatch({type:PRODUCT_FAILURE,payload:err.response.data})
    });
}

////v1/users/active/1