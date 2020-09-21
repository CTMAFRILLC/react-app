import React from 'react';
import { Link } from "react-router-dom";
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

function Siginin() {
    return (
        <section id="sa_container">
          <Header />
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
                  <Link to={"/sign-up"} className="SA-txt3"> Create an Account</Link>
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
              <Link to={"/"} className="sa-icon-close">
                <img src="assets/icons/png/Circle Button.png" alt="" />
              </Link>
              <img src="assets/icons/png/image.png" className="SA-image" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
<Footer />
</section>

    )
}

export default Siginin
