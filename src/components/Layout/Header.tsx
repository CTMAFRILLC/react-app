import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
  return (<>
    {/* headeing Navigation */}
    <header className="col-12 sa-header">
      <div className ="container">
        <div className ="row align-items-center justify-content-between">
          <div className ="d-flex align-items-center">
            <Link to={"/"}><img src="assets/icons/png/Logo Placement.png" className="sa-logo mr-3" alt="" /></Link>
          </div>
          <div>
            <Link to={"/sign-in"} className ="btn sa-btn">sign in</Link>
          </div>
        </div>
      </div>
    </header> 
    </>
    )
}

