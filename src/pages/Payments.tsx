import React from 'react'

function Payments() {
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
  {/* Main Content */}
  <main className="container p-0">
    <div className="row sa-wrapper-container align-items-start pt-4">
      <aside className="sa-dashboard-aside col-lg-3">
        <nav className="py-2">
          <ul>
            <li><a href="dashboard.html">dashboard</a></li>
            <li><a href="profile.html">profile</a></li>
            <li className="active"><a href="payments.html">payments</a></li>
            <li><a href="inbox.html">inbox</a></li>
            <div className="sa-dashboad-divider">
              <div className="py-5" />
              <div className="py-5" />
            </div>
            <li><a href="#"><img src="assets/icons/svg/signout.svg" /> sign out</a></li>
          </ul>
        </nav>
      </aside>
      <div className="sa-dashboard-main col-lg-9">
        <div className="sa-dashboard-title row  py-2">
          <h1 className="d-block">Payments</h1>
        </div>
        <div className="sa-preveiw-dashboad mb-5">
          <div className="row">
            <p className="m-0">Default Payment Method</p>
          </div>
          <div className="row align-items-center justify-content-between sa-dashboard-card">
            <div className="col-md-4 sa-payment-card">
              <div className="d-flex align-items-center justify-content-between">
                <img src="assets/icons/png/Mastercard.png" />
                <p className="m-0">xxxx-xxxx-xxxx-1234</p>
              </div>
            </div>
            <div>
              <a href="#">Update payment info</a>
            </div>
          </div>
        </div>
        <div className="sa-preveiw-dashboad">
          <div className="row">
            <p className="m-0">Billing Details</p>
          </div>
          <div className="row align-items-center justify-content-between sa-dashboard-inputfield">
            <div className="col-2 pl-0">
              <p className="m-0">date</p>
            </div>
            <div className="col-8">
              <p className="m-0">description</p>
            </div>
            <div>
              <p className="m-0">Total</p>
            </div>
          </div>
          <div className="row align-items-center justify-content-between sa-dashboard-inputfield">
            <div className="col-2 pl-0">
              <p className="m-0">01/08/2020</p>
            </div>
            <div className="col-8">
              <p className="m-0">VR Tour Experience</p>
            </div>
            <div>
              <p className="m-0">$9.99</p>
            </div>
          </div>
          <div className="row align-items-center justify-content-between sa-dashboard-inputfield">
            <div className="col-2 pl-0">
              <p className="m-0">01/09/2020</p>
            </div>
            <div className="col-8">
              <p className="m-0">VR Tour Experience</p>
            </div>
            <div>
              <p className="m-0">$9.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</section>

    )
}

export default Payments
