import React, { useEffect } from "react";
import styled from "styled-components";
// import { store } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  useToast
} from '@chakra-ui/react'
// import { login } from "../redux/authReducer.js/action";
import { useLocation, useNavigate } from "react-router-dom";
// import logo from "../Photos/officeSystem.webp";
// import { login } from "../redux/authReducer/action";
// import { Input } from "@material-tailwind/react";
import BG from "../images/Rectangle 1.png";
import DotsImage from "../images/Group 8.png";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import axios from "axios";
import Headerstop from "../components/smallcomponents/Headerstop";
import { login } from "../redux/authReducer.js/action";
let theme = true;


export const Login = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const toast = useToast();
  const [username, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  // const authUser = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = (e) => {
    e.preventDefault();

    let userData = {
      username,
      password,
      deviceId:
        "dapxDzCySkg:APA91bFte8-oCXMYKJp016cUG7DcGprawTKhzxOSVXA7B55TzYTuYPTPZ6QLAT3Ei8wu0WKc0eIbBlQJosDq50s_fn66Bu0RRla2sPKNEBorqRJfTwTAlC_ssuCSb6Fur7PgqnMHeseo",
    };
   console.log(userData)
  //   dispatch(login(userData)).then(() => {
  //      console.log("ajay");
  //     // if(res){
  //     //   console.log("ritesh");
  //     //   // navigation("/");
  //     //   // window.location.reload()
  //     // }
      
  //     // window.location.reload();
  //   });
  axios.post("https://staging-api.digitaloms.in/user/auth/login",userData)
  .then((res)=>{
    console.log(res.data);
    if (res.data){
        const info = localStorage.setItem("token",res.data.accessToken);
        const user = localStorage.setItem("user",JSON.stringify(res.data));
        // const Rols = localStorage.setItem("roles",res.data.role);
        navigation("/voter")
        window.location.reload();
    }
  })
  .catch((err)=>{
    // console.log(err)
    if(err){
      toast({
        title: 'Wrong Credentials',
        description: 'Please Check Username & Password',
        status: 'error',
        position: "top",
        duration: 4000,
        isClosable: true,
      });
    }
  })

  };

  return (
    <div className="h-screen flex flex-col justify-center ">
          
<Headerstop welcome={"Welcome!"}/>

      <div className="w-full max-w-md m-auto bg-white mt-20 px-16  ">
        <h1 className="text-2xl text-themeYellow">Voter</h1>
        <h1 className="text-md  text-black mt-2 mb-12 text-center">
          Please Enter Your Details Below
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div class="relative">
            <input
              type="text"
              id="floating_outlined"
              class="block  px-2.5 pb-2.5 pt-4 w-full text-xl text-gray-900 
              rounded-lg border-2 border-brightYellow-300  dark:border-brightYellow-600 dark:focus:border-brightYellow-500 focus:ring-0 focus:border-brightYellow-600 peer"
              //   placeholder="Enter Username"
              onChange={(e) => {
                setemail(e.target.value);
              }}
              value={username}
            />
            <label
              for="floating_outlined"
              class="absolute text-xl text-black dark:text-black-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Username
            </label>
          </div>

          <div class="relative">
            <input
             type={showPassword ? 'text' : 'password'}
              id="floating_outlined"
              class=" flex px-2.5 pb-2.5 pt-4 w-full text-xl text-gray-900 bg-transparent rounded-lg border-2 border-brightYellow-300 dark:border-brightYellow-600 dark:focus:border-brightYellow-500  focus:ring-0 focus:border-brightYellow-600 peer"
              //   placeholder="password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              value={password}
             
            />
            

            {/* <GoEye/> */}
            <label
              for="floating_outlined"
              class="absolute text-xl text-black dark:text-black-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Password
            </label>
           {!showPassword? <div
              className="absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              <GoEye />
            </div>:<div
              className="absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              <GoEyeClosed />
            </div>}
           
      
          </div>
          
<div className="w-full"  style={{
          backgroundImage: `url(${DotsImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>

          <div className=" bg-themeYellow items-center   mt-6 rounded-md">
            <button
              className={`py-2 px-4 text-sm text-black text-center rounded `}
            >
              LOGIN
            </button>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};
