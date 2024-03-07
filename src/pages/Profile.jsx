import React  from "react";
import BG from "../images/Rectangle 1.png";
import { MdOutlineLogout } from "react-icons/md";
// import './TweetCard.css';
function Profile()
{
    const TweetCard = ({ username, tweetText, timestamp }) => {
    const Logout = () => {
        localStorage.clear();
        window.location.reload();
      }
    return(
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
        
        <div class="absolute w-full  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl ">
            <div className= 'w-full flex justify-between '>
            <p className="ml-12 " >{"Hello !"} </p>
            <p className="">{"Select who you are ?"}</p>
            <MdOutlineLogout className='w-12 h-10' onClick={Logout}/>
    
            </div>
        
        {/* <p>Hello</p> */}
    </div> 
      </div>
      <div className="tweet-card">
      <div className="user-info">
        <span className="username">{username}</span>
        <span className="timestamp">{timestamp}</span>
      </div>
      <div className="tweet-text">{tweetText}</div>
    </div>
        </>
    );
}}
export default Profile;