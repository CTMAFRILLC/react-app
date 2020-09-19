import React from 'react'

function Subscription() {
    return (
       <section id="sa_container">
  {/* headeing Navigation */}
  <header className="col-12 sa-header">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <a href="index.html"><img src="assets/icons/png/Logo Placement.png" className="sa-logo mr-3" /></a>
        </div>
        <div>
          <a href="signup.html" className="btn sa-btn">sign up</a>
        </div>
      </div>
    </div>
  </header>
  {/* Main Content */}
  <main className="container">
    <div className="col-12">
      <div className="row sa-wrapper-container">
        <div className="sa-wrapper col-md-7 mx-auto">
          <div className="row">
            <a className="sa-icon-close tr2" href="#"><img src="assets/icons/png/Circle Button.png" /></a>
            <div className="col-md-7 mx-auto">
              <div className="mb-4">
                <h3 className="SA-txt1 text-center">Subscription</h3>
                <h4 className="SA-txt2 text-center">STEP 1 OF 3</h4>
              </div>
              <div className="text-center">
                <p className="p-0">
                  <span className="SA-Price-txt">$9.99</span>
                  <span className="block">
                    <span className="SA-txt-label">per</span>
                    <span className="SA-txt-label2">month</span>
                  </span>
                </p>
                <div className="col-md-11 mx-auto">
                  <li className="SA-txt-main">
                    30 days access to the platform
                  </li>
                  <li className="SA-txt-main">Access to all tourist site</li>
                  <li className="SA-txt-main">money back guarantee</li>
                </div>
              </div>
              <div className="mt-4">
                <a href="setup-payment.html" className="btn sa-form-btn">
                  continue
                </a>
              </div>
            </div>
          </div>
        </div>
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
          <a href="#"><img src="assets/icons/png/Volume.png" /></a>
        </div>
      </div>
    </div>
  </nav>
</section>


    )
}

export default Subscription
