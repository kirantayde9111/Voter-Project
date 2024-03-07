import React from 'react'
import BG from "../images/Rectangle 1.png";
import DotsImage from "../images/Group 8.png";
import { MdOutlineLogout } from "react-icons/md";
function Votermainpage() {

  const Logout = () => {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <>
     <div
    className="relative w-full   rounded-b-3xl  h-36 "
    style={{
      backgroundImage: `url(${BG})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
  >
    <img src={DotsImage} className=" w-full h-52" alt="" />
    <div class="absolute w-full  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl ">
        <div className= 'w-full flex justify-between '>
        <p className="ml-4">{"Voter List"}</p>
        <MdOutlineLogout className='w-12 h-10' onClick={Logout}/>

        </div>
    
    {/* <p>Hello</p> */}
</div> 
  </div>
    </>
  )
}

export default Votermainpage
