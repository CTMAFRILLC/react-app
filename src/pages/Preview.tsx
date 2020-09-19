import React from 'react'

function Preview() {
    return (
     <section id="sa_container">
  {/* headeing Navigation */}
  <header className="col-12 sa-header">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <a href="index.html"><img src="assets/icons/png/Logo Placement.png" className="sa-logo mr-3"  /></a>
        </div>
        <div>
          <a href="signin.html" className="btn sa-btn">sign in</a>
        </div>
      </div>
    </div>
  </header>
  {/* Main Content */}
  <main className="container-fluid">
    <div className="sa-wrapper-container row align-content-center justify-content-center">
      <div className="col-12">
        <div className="carousel sa-preview-carousel" data-flickity="{ &quot;wrapAround&quot;: true }">
          <div className="carousel-cell col-3">
            <div className="sa-carousel-imgContainer">
              <img src="https://picsum.photos/280/320?random=4" className="img-fluid" />
            </div>
            <div className="sa-carousel-content text-center">
              <div className="px-3 py-2">
                <h3>cape coast castle</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor
                  invidunt ut labore et dolore magna aliquyam erat, sed diam </p>
              </div>
              <div>
                <a href="#" className="btn sa-btn">watch preview</a>
              </div>
            </div>
          </div>
          <div className="carousel-cell col-3">
            <div className="sa-carousel-imgContainer">
              <img src="assets/icons/png/image.png"  />
            </div>
            <div className="sa-carousel-content text-center">
              <div className="px-3">
                <h3>cape coast castle</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor
                  invidunt ut labore et dolore magna aliquyam erat, sed diam </p>
              </div>
              <div>
                <a href="#" className="btn sa-btn">watch preview</a>
              </div>
            </div>
          </div>
          <div className="carousel-cell col-3">
            <div className="sa-carousel-imgContainer">
              <img src="assets/icons/png/image.png" />
            </div>
            <div className="sa-carousel-content text-center">
              <div className="px-3">
                <h3>cape coast castle</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor
                  invidunt ut labore et dolore magna aliquyam erat, sed diam </p>
              </div>
              <div>
                <a href="#" className="btn sa-btn">watch preview</a>
              </div>
            </div>
          </div>
          <div className="carousel-cell col-3">
            <div className="sa-carousel-imgContainer">
              <img src="assets/icons/png/image.png"  />
            </div>
            <div className="sa-carousel-content text-center">
              <div className="px-3">
                <h3>cape coast castle</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor
                  invidunt ut labore et dolore magna aliquyam erat, sed diam </p>
              </div>
              <div>
                <a href="#" className="btn sa-btn">watch preview</a>
              </div>
            </div>
          </div>
          <div className="carousel-cell col-3">
            <div className="sa-carousel-imgContainer">
              <img src="assets/icons/png/image.png"  />
            </div>
            <div className="sa-carousel-content text-center">
              <div className="px-3">
                <h3>cape coast castle</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor
                  invidunt ut labore et dolore magna aliquyam erat, sed diam </p>
              </div>
              <div>
                <a href="#" className="btn sa-btn">watch preview</a>
              </div>
            </div>
          </div>
          <div className="carousel-cell col-3">
            <div className="sa-carousel-imgContainer">
              <img src="assets/icons/png/image.png"  />
            </div>
            <div className="sa-carousel-content text-center">
              <div className="px-3">
                <h3>cape coast castle</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor
                  invidunt ut labore et dolore magna aliquyam erat, sed diam </p>
              </div>
              <div>
                <a href="#" className="btn sa-btn">watch preview</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  {/* Botton Navigation */}
  <div className="container">
    <nav className="sa-nav">
      <div className="d-flex align-items-center justify-content-between">
        <ul className="sa-nav-links d-flex">
          <li className="sa-nav-link"><a href="#">support</a></li>
          <li className="sa-nav-link"><a href="#">about</a></li>
          <li className="sa-nav-link"><a href="#">credits</a></li>
        </ul>
        <div className="sav-nav-volume">
          <a href="#"><img src="assets/icons/png/Volume.png"  /></a>
        </div>
      </div>
    </nav>
  </div>
</section>


    )
}

export default Preview
