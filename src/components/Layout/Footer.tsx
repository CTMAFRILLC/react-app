import React from 'react';
import { Link } from "react-router-dom";

 
export default function Footer() {
  return (
    <nav className="sa-nav">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <ul className="sa-nav-links d-flex">
                    <li className="sa-nav-link"><Link to={"/"} >support</Link></li>
                    <li className="sa-nav-link"><Link to={"/about"} >about</Link></li>
                    <li className="sa-nav-link"><Link to={"/"} >credits</Link></li>
                </ul>
                <div className="sav-nav-volume">
                    <Link to={"#"}>
                        <img src="assets/icons/png/Volume.png" alt=""/>
                    </Link>
                    
                </div>      
            </div>
        </div>
    </nav>
  );
}
