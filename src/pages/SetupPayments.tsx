import React from 'react'

function SetupPayments() {
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
  <main className="container">
    <div className="row sa-wrapper-container">
      <div className="sa-wrapper col-md-7 mx-auto">
        <div className="row">
          <a className="sa-icon-close tr2" href="#"><img src="assets/icons/png/Circle Button.png" /></a>
          <div className="col-md-8 mx-auto">
            <div className="mb-4">
              <h3 className="SA-txt1 text-center">
                Set up your payment
              </h3>
              <h4 className="SA-txt2 text-center">STEP 3 OF 3</h4>
            </div>
            <div className="text-center mb-3">
              <p className="m-0 d-block sa-spanblock">Your membership starts <br /> as soon as you setup payments
              </p></div>
            <div className="text-center pt-2">
              <a href="payment-method.html" className="sa-payment">
                <span className="mr-2">Pay with Debit or Credit Card</span>
                <span className="mx-2"><img src="assets/icons/png/Visa.png" className="sa-payment-img" /><img src="assets/icons/png/Mastercard.png" className="sa-payment-img" /></span>
                <span className="ml-2"><img src="assets/icons/png/RightArrow_Small.png" className="arrow" /></span>
              </a>
            </div>
            <div className="py-3" />
          </div>
        </div>
      </div>
    </div>
  </main>
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
          <a href="#"><img src="assets/icons/png/Volume.png" /></a>
        </div>
      </div>
    </div>
  </nav>
</section>


    )
}

export default SetupPayments
