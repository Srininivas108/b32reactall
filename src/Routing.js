import React from 'react';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import User from "./User";

export default function RoutingComponent(){
    return(
       
           <div>
           <BrowserRouter>
            <Link to="/">Dashboard</Link>
            <Link to="/contactus">ContactUs</Link>
            <Link to="/aboutus">AboutUs</Link>
            <Link to="/user">User</Link>
             <Routes>
                <Route path="/" element={<Dashboard/>}></Route>
                <Route path="/contactus" element={<ContactUs/>}></Route>
                <Route path="/aboutus" element={<AboutUs/>}></Route>
                <Route path="/user" element={<User/>}></Route>
             </Routes>  
           </BrowserRouter>
           
           
           </div>
    )
}
function ContactUs(){
    return(
        <>
           <h1>ContactUs component</h1>
        
        </>
    )
}
function AboutUs(){
    return(
        <>
           <h1>AboutUs component</h1>
        
        </>
    )
}
function Dashboard(){
    return(
        <>
           <h1>Dashboard component</h1>
        
        </>
    )
}