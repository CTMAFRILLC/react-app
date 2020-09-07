import React from 'react'

function Siginin() {
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
          <a href="signup.html" className="btn sa-btn">sign up</a>
        </div>
      </div>
    </div>
  </header>
  {/* Main Content */}
  <main className="container">
    <div className="col-12">
      <div className="row sa-wrapper-container align-content-center justify-content-center">
        <div className="sa-wrapper col-lg-7 mx-auto">
          <div className="row">
            <div className="col-md-6 sa-col-left">
              <div className="mb-4">
                <h3 className="SA-txt1">Sign In</h3>
                <h4 className="SA-txt2">
                  New User?
                  <a href="#" className="SA-txt3"> Create an Account</a>
                </h4>
              </div>
              <div>
                <form>
                  <div>
                    <input type="text" className="sa-text-input" placeholder="Username or Email" required />
                  </div>
                  <div>
                    <input type="password" className="sa-text-input" placeholder="Password" required />
                  </div>
                  <div className="checkbox-container my-2">
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <div className="input-title">Keep me signed in</div>
                      <span className="checkbox-custom rectangular" />
                    </label>
                  </div>
                  <div className="my-2">
                    <button type="submit" className="btn sa-form-btn">
                      sign in
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
                <img src="assets/icons/png/Circle Button.png" />
              </a>
              <img src="assets/icons/png/image.png" className="SA-image" />
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
          <a href="#"><img src="assets/icons/png/Volume.png" /></a>
        </div>
      </div>
    </nav>
  </div>
</section>

    )
}

export default Siginin
