import React from 'react'
import { Navigate, Routes, Route } from "react-router-dom";
import Homepage from './Homepage';
import { Login } from './Login';
import Votermainpage from './Votermainpage';
import Profile from './Profile';
import PrivateRoute12 from './PrivateRouts12';
function MainRoutes() {
  return (
    <div>
       <Routes>
        
        <Route element={<PrivateRoute12/>}>
          <Route path="/" element={<Homepage/>} />
         
          <Route path="/voter" element={< Votermainpage/>} /> 
          {/* <Route path="/complaint/edit/:id" element={< EditComplainPage/>} />  
          <Route path="/officedata" element={< Officedatapage/>} /> 
          <Route path="/karykartadata" element={< Karykartadatapage/>} /> 
          <Route path="/visitors" element={< Visitorspage/>} /> 
          <Route path="*" element={<Navigate to="/dashboard" replace />} /> */}
        </Route>
        <Route path="/profile" element={< Profile/>} />
        <Route path="/login" element={< Login/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default MainRoutes
