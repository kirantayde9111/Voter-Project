import React from 'react'
import BG from "../../images/Rectangle 1.png";
import DotsImage from "../../images/Group 8.png";
function Headerstop({welcome}) {
  return (
    <>
    <div
    className="relative w-full   rounded-b-3xl  h-60 "
    style={{
      backgroundImage: `url(${BG})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
  >
    <img src={DotsImage} className=" w-full h-52" alt="" />
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl ">
    <p className="">{welcome}</p>
    {/* <p>Hello</p> */}
</div> 
  </div>
  </>
  )
}

export default Headerstop
