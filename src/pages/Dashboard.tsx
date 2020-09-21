import React, {Fragment} from 'react'
import { Link } from "react-router-dom"

function Dashboard() {
    return (
      <Fragment>
        {/* headeing Navigation */}
        <header className="col-12 sa-header">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Link to={"/"}><img src="assets/icons/png/Logo Placement.png" className="sa-logo mr-3" alt="" /></Link>
                <ul className="sa-nav-links d-flex">
                  <li className="sa-nav-link"><Link to={"/"} className="active">Home</Link></li>
                  <li className="sa-nav-link"><Link to={"/explore"}>Explore</Link></li>
                  <li className="sa-nav-link"><Link to={"/support"}>Support</Link></li>
                </ul>
              </div>
              <div>
                <div className="sa-header-imgContainer">
                  <Link to={"/dashboard"}><img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/s53-ae-num-009656545000.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=d39e0cd4a19eb5c941a940c25efc8caf" className=" img-circle" alt="" /></Link></div>
              </div>
            </div>
          </div>
        </header>
        {/* Main Content */}
        <main className="container p-0">
          <div className="row sa-wrapper-container align-items-start pt-4">
            <aside className="sa-dashboard-aside col-lg-3">
              <nav className="py-2">
                <ul>
                  <li className="active"><Link to={"/dashboard"}>dashboard</Link></li>
                  <li><Link to={"/profile"}>profile</Link></li>
                  <li><Link to={"/payments"}>payments</Link></li>
                  <li><Link to={"/inbox"}>inbox</Link></li>
                  <div className="sa-dashboad-divider">
                    <div className="py-5" />
                    <div className="py-5" />
                  </div>
                  <li><Link to={"#"}><img src="assets/icons/svg/signout.svg" alt="" /> sign out</Link></li>
                </ul>
              </nav>
            </aside>
            <div className="sa-dashboard-main col-lg-9">
              <div className="sa-dashboard-title py-2">
                <h1>Dashboard</h1>
                <p className="m-0">Your tour history</p>
              </div>
              <div className="sa-toursite-desc sa-preveiw-dashboad">
                <div className="carousel sa-preview-carousel tabcontent" data-flickity="{&quot;wrapAround&quot;: true, &quot;pageDots&quot;: false}">
                <div className="carousel-cell col-6 col-md-4">
                                      <div className="sa-carousel-imgContainer">
                                          <img src="https://picsum.photos/280/320?random=4" alt="" />
                                      </div>
                                      <div className="sa-explore-courousel-details">
                                          <h4>Tourist site Name</h4>
                                          <p className="m-0">Location</p>
                                      </div>
                                  </div>
                                  <div className="carousel-cell col-6 col-md-4">
                                      <div className="sa-carousel-imgContainer">
                                          <img src="https://picsum.photos/280/320?random=1" alt="" />
                                      </div>
                                      <div className="sa-explore-courousel-details">
                                          <h4>Tourist site Name</h4>
                                          <p className="m-0">Location</p>
                                      </div>
                                  </div>
                                  <div className="carousel-cell col-6 col-md-4">
                                      <div className="sa-carousel-imgContainer">
                                          <img src="https://picsum.photos/280/320?random=2" alt="" />
                                      </div>
                                      <div className="sa-explore-courousel-details">
                                          <h4>Tourist site Name</h4>
                                          <p className="m-0">Location</p>
                                      </div>
                                  </div>
                                  <div className="carousel-cell col-6 col-md-4">
                                      <div className="sa-carousel-imgContainer">
                                          <img src="https://picsum.photos/280/320?random=3" alt="" />
                                      </div>
                                      <div className="sa-explore-courousel-details">
                                          <h4>Tourist site Name</h4>
                                          <p className="m-0">Location</p>
                                      </div>
                                  </div>
                                  <div className="carousel-cell col-6 col-md-4">
                                      <div className="sa-carousel-imgContainer">
                                          <img src="https://picsum.photos/280/320?random=5" alt="" />
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
        </main>
      </Fragment>

    )
}

export default Dashboard
