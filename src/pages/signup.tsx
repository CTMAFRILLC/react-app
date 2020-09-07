import React from 'react'

export default function signup() {
    return (
        <section id="sa_container">
  <div className="container">
    {/* headeing Navigation */}
    <header className="col-12 sa-header">
      <div className="row align-items-center justify-content-between">
        <div>
          <img src="assets/icons/png/Logo Placement.png" className="sa-logo"/>
        </div>
        <div>
          <a href="signin.html" className="btn sa-btn">sign in</a>
        </div>
      </div>
    </header>
  </div>
  {/* Main Content */}
  <main className="container">
    <div className="col-12">
      <div className="row sa-signup sa-wrapper-container align-content-center justify-content-center">
        <div className="sa-wrapper col-lg-7 mx-auto">
          <div className="row">
            <div className="col-md-6 sa-col-left">
              <div className="mb-2">
                <h3 className="SA-txt1">Create an Account</h3>
                <h4 className="SA-txt2">
                  Already A User?
                  <a href="signin.html" className="SA-txt3"> Sign in</a>
                </h4>
              </div>
              <div>
                <form>
                  <div>
                    <input type="text" className="sa-text-input" placeholder="Full Name" required />
                  </div>
                  <div>
                    <input type="email" className="sa-text-input" placeholder="Email" required />
                  </div>
                  <div>
                    <input type="password" className="sa-text-input" placeholder="Password" required />
                  </div>
                  <div>
                    <input type="password" className="sa-text-input" placeholder="Confirm Password" required />
                  </div>
                  <div className="my-2">
                    <button type="submit" className="btn sa-form-btn">
                      create an account
                    </button>
                  </div>
                </form>
                <div className="my-2 quest">
                  <span className="sa-dash" />
                  <span>Or sign in with</span>
                  <span className="sa-dash" />
                </div>
                <div className="my-2 d-flex justify-content-between">
                  <a href="#" className="btn sa-df-btn">Google</a>
                  <a href="#" className="btn sa-df-btn">Facebook</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 sa-col-right">
              <a className="sa-icon-close" href="#">
                <img src="assets/icons/png/Circle Button.png"  />
              </a>
              <img src="assets/icons/png/image.png" className="SA-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Botton Navigation */}
    <nav className="sa-nav">
      <div className="d-flex align-items-center justify-content-between">
        <ul className="sa-nav-links d-flex">
          <li className="sa-nav-link"><a href="#">support</a></li>
          <li className="sa-nav-link"><a href="#">about</a></li>
          <li className="sa-nav-link"><a href="#">credits</a></li>
        </ul>
        <div className="sav-nav-volume">
          <a href="#"><img src="assets/icons/png/Volume.png" /></a>
        </div>
      </div>
    </nav>
  </main>
</section>

    )
}
