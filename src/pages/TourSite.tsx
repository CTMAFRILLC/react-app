import React from 'react'

function TourSite() {
    return (
        <section id="sa_container">
  {/* headeing Navigation */}
  <header className="col-12 sa-header">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <a href="index.html"><img src="assets/icons/png/Logo Placement.png" className="sa-logo mr-3"  /></a>
          <ul className="sa-nav-links d-flex">
            <li className="sa-nav-link"><a href="#" className="active">Home</a></li>
            <li className="sa-nav-link"><a href="#">Explore</a></li>
            <li className="sa-nav-link"><a href="#">Support</a></li>
          </ul>
        </div>
        <div>
          <a href="signin.html" className="btn sa-btn">sign in</a>
        </div>
      </div>
    </div>
  </header>
  {/* Main Content */}
  <main className="container p-0">
    <div className="row">
      <div className="SA-main-contentwrap col-lg-4">
        <h3 className="SA-tour-name">Cape coast castle</h3>
        <div className="SA-tour-descrption">
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore</p>
        </div>
        <div>
          <a href="#" className="btn sa-btn"><i className="fas fa-play mr-1" /> start tour</a> </div>
      </div>
    </div>
    <div className="sa-desc-nav mt-1">
      <ul className="d-flex text-center align-content-center justify-content-center">
        <li className="mx-2"><a href="#" className="sa-desc-tablinks active" data-tab="previews">previews</a></li>
        <li className="mx-2"><a href="#" className="sa-desc-tablinks" data-tab="scenes">scenes</a></li>
        <li className="mx-2"><a href="#" className="sa-desc-tablinks" data-tab="detail">detail</a></li>
      </ul>
    </div>
    <div className="sa-toursite-desc">
      <div className="carousel sa-preview-carousel tabcontent" id="previews" data-flickity="{&quot;wrapAround&quot;: true, &quot;pageDots&quot;: false}">
        <div className="carousel-cell col-3">
          <div className="sa-carousel-imgContainer">
            <img src="assets/icons/png/image.png"  />
          </div>
        </div>
        <div className="carousel-cell col-3">
          <div className="sa-carousel-imgContainer">
            <img src="assets/icons/png/image.png" />
          </div>
        </div>
        <div className="carousel-cell col-3">
          <div className="sa-carousel-imgContainer">
            <img src="assets/icons/png/image.png"  />
          </div>
        </div>
        <div className="carousel-cell col-3">
          <div className="sa-carousel-imgContainer">
            <img src="assets/icons/png/image.png" />
          </div>
        </div>
        <div className="carousel-cell col-3">
          <div className="sa-carousel-imgContainer">
            <img src="assets/icons/png/image.png"  />
          </div>
        </div>
      </div>
      <div className="tabcontent" id="scenes">
        <h1>scenes</h1>
      </div>
      <div className=" tabcontent" id="detail">
        <h1>detail</h1>
      </div>
    </div>
  </main>
  {/* Botton Navigation */}
  <nav className="sa-nav">
    <div className="container">
      <div className="d-flex align-items-center justify-content-between">
        <ul className="sa-nav-links d-flex">
          <li className="sa-nav-link"><a href="javascript:void(0);">support</a></li>
          <li className="sa-nav-link"><a href="javascript:void(0);">about</a></li>
          <li className="sa-nav-link"><a href="javascript:void(0);">credits</a></li>
        </ul>
        <div className="sav-nav-volume">
          <a href="#"><img src="assets/images/png/Volume.png" /></a>
        </div>
      </div>
    </div>
  </nav>
</section>

    )
}

export default TourSite
