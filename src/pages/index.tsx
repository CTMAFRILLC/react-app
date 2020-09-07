import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage  = () => {
    return(
        <section id="sa_container">
  {/* headeing Navigation */}
  <header className="col-12 sa-header">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <a href="index.html"><img src="assets/icons/png/Logo Placement.png" className="sa-logo mr-3" /></a>
        </div>
        <div>
          <Link to='/sign-in' className="btn sa-btn">sign in</Link>
        </div>
      </div>
    </div>
  </header>
  <div className="container">
    <div className="row sa-wrapper-container">
    </div>
  </div>
  {/* Botton Navigation */}
  <nav className="sa-nav">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <ul className="sa-nav-links d-flex">
          <li className="sa-nav-link"><a href="#">support</a></li>
          <li className="sa-nav-link"><Link to="/about">about</Link></li>
          <li className="sa-nav-link"><a href="#">credits</a></li>
        </ul>
        <div className="sav-nav-volume">
          <a href="#"><img src="assets/icons/png/Volume.png"  /></a>
        </div>
      </div>
    </div>
  </nav>
</section>
    )
}

