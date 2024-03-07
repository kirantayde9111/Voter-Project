import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute12() {
  const JWTToken = localStorage.getItem("token");
 
  const payload = JWTToken ? JSON.parse(atob(JWTToken.split(".")[1])) : null;
  const expiry = payload ? new Date(payload.expiry * 1000) : null;
  const state = {
    referrer: window.location.pathname,
    message: "You must sign in to your Deciphr account to continue.",
  };

  // Check if token is available
  if (!payload) {
    return <Navigate to="/login" state={state} />
  }


  // Check token validity
  // if (expiry < new Date()) {
  //   localStorage.clear();
    
  //   // return <Navigate to="/login" state={state} />
  // }

  return <Outlet />
}