import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Layout/Footer'
function Explore() {
    return (
   <section id="sa_container">
  {/* headeing Navigation */}
  <header className="col-12 sa-header">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <a href="index.html"><img src="assets/icons/png/Logo Placement.png" className="sa-logo mr-3 img-fluid" alt=""/></a>
          <ul className="sa-nav-links d-flex">
            <li className="sa-nav-link"><a href="index.html">Home</a></li>
            <li className="sa-nav-link"><Link to={"/explore"} className="active">Explore</Link></li>
            <li className="sa-nav-link"><a href="#">Support</a></li>
          </ul>
        </div>
        <div>
          <div className="sa-header-imgContainer">
            <Link to={"/dashboard"}><img className="img-fluid" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/s53-ae-num-009656545000.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=d39e0cd4a19eb5c941a940c25efc8caf" alt="" /></Link></div>
        </div>
      </div>
    </div>
  </header>
  <div className="container p-0">
    <div className="row justify-content-between align-content-center">
      <div className="SA-main-contentwrap col-md-9">
        <h4 className="SA-tour-name">Coming Soon to SeeAfrica</h4>
      </div>
      <div className="col-2 col-md-2 p-0">
        <form className="sa-searchform ">
          <div className="sa-serachfields d-flex">
            <input type="text" placeholder="Search" required />
            <button><img className="img-fluid" src="assets/icons/png/Search Icon.png Icon.png" alt="" /></button></div>
        </form>
      </div>
    </div>
    <div className=" row align-content-start justify-content-center">
      <div className="col-12 ">
        <div className="sa-explore">
          <div className="sa-toursite-desc">
            <div className="carousel sa-preview-carousel tabcontent" id="previews" data-flickity="{&quot;contain&quot;: true, &quot;autoPlay&quot;: 2000 , &quot;pageDots&quot;: false}">
              <div className="carousel-cell col-3">
                <div className="sa-carousel-imgContainer">
                  <img className="img-fluid" src="https://picsum.photos/280/320?random=1" alt="" />
                </div>
                <div className="sa-explore-courousel-details">
                  <h4>Tourist site Name</h4>
                  <p className="m-0">Location</p>
                </div>
              </div>
              <div className="carousel-cell col-3">
                <div className="sa-carousel-imgContainer">
                  <img className="img-fluid" src="https://picsum.photos/280/320?random=12" alt="" />
                </div>
                <div className="sa-explore-courousel-details">
                  <h4>Tourist site Name</h4>
                  <p className="m-0">Location</p>
                </div>
              </div>
              <div className="carousel-cell col-3">
                <div className="sa-carousel-imgContainer">
                  <img className="img-fluid" src="https://picsum.photos/280/320?random=13" alt="" />
                </div>
                <div className="sa-explore-courousel-details">
                  <h4>Tourist site Name</h4>
                  <p className="m-0">Location</p>
                </div>
              </div>
              <div className="carousel-cell col-3">
                <div className="sa-carousel-imgContainer">
                  <img className="img-fluid" src="https://picsum.photos/280/320?random=1" alt=""/>
                </div>
                <div className="sa-explore-courousel-details">
                  <h4>Tourist site Name</h4>
                  <p className="m-0">Location</p>
                </div>
              </div>
              <div className="carousel-cell col-3">
                <div className="sa-carousel-imgContainer">
                  <img className="img-fluid" src="https://picsum.photos/280/320?random=16" alt=""/>
                </div>
                <div className="sa-explore-courousel-details">
                  <h4>Tourist site Name</h4>
                  <p className="m-0">Location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      <Footer />
</section>

    )
}

export default Explore
