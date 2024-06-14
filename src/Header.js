import { useState } from "react";
import { LOGO_IMG } from "./utils/constants";
import { Link } from "react-router-dom";

const Header = ()=>{
const[logo_btn,setlogo_btn] = useState("Login")
    
    
    return (
        <div className="header">
                
        <img className="log_img" src={LOGO_IMG}/>
     
     <div className="nav-items">
         <ul>
           <li> <Link to="/"> Home</Link></li>
           <li><Link to="/about">About</Link></li> 
           <li><Link to="/contact">Contact</Link></li>
             <li>Cart</li>
             <button className="logo_btn" onClick={
                ()=>{
                    logo_btn==="Login" ? setlogo_btn("Logout") : setlogo_btn("Login")
                    }
             }>{logo_btn}</button>
         </ul>
      

     </div>
    
 </div>
    )

    
}

export default Header;