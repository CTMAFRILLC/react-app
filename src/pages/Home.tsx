import React from 'react'

function Home() {
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
            <li className="sa-nav-link"><a href="explore.html">Explore</a></li>
            <li className="sa-nav-link"><a href="#">Support</a></li>
          </ul>
        </div>
        <div>
          <div className="sa-header-imgContainer">
            <a href="dashboard.html"><img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/s53-ae-num-009656545000.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=d39e0cd4a19eb5c941a940c25efc8caf"  className=" img-circle" /></a></div>
        </div>
      </div>
    </div>
  </header>
  <div className="container p-0">
    <div className="row">
      <div className="SA-main-contentwrap col-lg-4">
        <p className="sa-featured m-0">Featured</p>
        <h3 className="SA-tour-name">Cape coast castle</h3>
        <div className="SA-tour-descrption">
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore</p>
        </div>
        <div>
          <a href="#" className="btn sa-btn"><i className="fas fa-play mr-1" /> start tour</a> <a href="#" className="btn sa-btn-info "><i className="fas fa-info-circle mr-1" /> more info</a></div>
      </div>
    </div>
    <div className="sa-desc-nav mt-1">
      <ul className="d-flex text-center align-content-center justify-content-center">
        <li className="mx-2"><a href="#" className="sa-desc-tablinks active">coming soon on seeaafrica</a>
        </li>
      </ul>
    </div>
    <div className="sa-toursite-desc sa-preveiw-dashboad">
      <div className="carousel sa-preview-carousel tabcontent" data-flickity="{&quot;wrapAround&quot;: true, &quot;pageDots&quot;: false}">
        <div className="carousel-cell col-6 col-md-4">
          <div className="sa-carousel-imgContainer">
            <img src="https://picsum.photos/280/320?random=4" />
          </div>
        </div>
        <div className="carousel-cell col-6 col-md-4">
          <div className="sa-carousel-imgContainer">
            <img src="https://picsum.photos/280/320?random=1" />
          </div>
        </div>
        <div className="carousel-cell col-6 col-md-4">
          <div className="sa-carousel-imgContainer">
            <img src="https://picsum.photos/280/320?random=2" />
          </div>
        </div>
        <div className="carousel-cell col-6 col-md-4">
          <div className="sa-carousel-imgContainer">
            <img src="https://picsum.photos/280/320?random=3" />
          </div>
        </div>
        <div className="carousel-cell col-6 col-md-4">
          <div className="sa-carousel-imgContainer">
            <img src="https://picsum.photos/280/320?random=5" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Botton Navigation */}
  <nav className="sa-nav">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <ul className="sa-nav-links d-flex">
          <li className="sa-nav-link"><a href="#">support</a></li>
          <li className="sa-nav-link"><a href="#">about</a></li>
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

export default Home
