import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actiontype";

export const login = (userData) => (dispatch) => {
        dispatch({type:LOGIN_REQUEST})
    return axios.post("https://staging-api.digitaloms.in/user/auth/login",userData)
    
    .then((res)=>{
        dispatch({type:LOGIN_SUCCESS, payload:res.data.access_token
        })
        console.log(res);
        if (res.data){
            const info = localStorage.setItem("token",res.data.access_token);
            const user = localStorage.setItem("user",JSON.stringify(res.data));
            // const Rols = localStorage.setItem("roles",res.data.role);
        }
    })
    .catch((err)=>{
        dispatch({type:LOGIN_FAILURE,payload:err.response.data})
        console.log(err);
    })
}