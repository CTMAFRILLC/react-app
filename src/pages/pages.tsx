import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
function Pages() {
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
  <main className="container">
    <div className="row sa-wrapper-container align-items-start pt-4">
    <ul className="list-group col-10">
          <li className="list-group-item text-success">
            <h2>PAGES</h2>
          </li>
          <li className="list-group-item"><Link to='/'>Index Page</Link></li>
      <li className="list-group-item">
        <Link to='/sign-in' >Signin</Link></li>
      <li className="list-group-item">
        <Link to='/about' >About</Link></li>
      <li className="list-group-item">
        <Link to='/sign-up' >Signup</Link></li>
      <li className="list-group-item">
        <Link to='/dashboard' >Dashboard</Link></li>
      <li className="list-group-item">
        <Link to='/profile' >Profile</Link></li>
      <li className="list-group-item">
        <Link to='/payments' >Payments</Link></li>
      <li className="list-group-item">
        <Link to='/inbox' >Inbox</Link></li>
      <li className="list-group-item">
        <Link to='/explore' >Explore</Link></li>
      <li className="list-group-item">
        <Link to='/home' >Home</Link></li>
      <li className="list-group-item">
        <Link to='/preview' >Preview</Link></li>
      <li className="list-group-item">
        <Link to='/tour-site' >TourSite</Link></li>
      <li className="list-group-item">
        <Link to='/subscription' >Subscription</Link></li>
      <li className="list-group-item">
        <Link to='/setup-payments' >SetupPayments</Link></li>
      <li className="list-group-item">
        <Link to='/vr-screen' >VrScreen</Link></li>
      <li className="list-group-item">
        <Link to='/pages' >Pages</Link></li>
        </ul>
    </div>
  </main>


  {/* <!-- Modal --> */}
 <div className="modal fade" id="profileModal" tab-index="-1" aria-labelledby="profileModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title m-0" id="profileModalLabel">Change profile picture</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <img src="assets/icons/png/Circle Button.png" alt="" className="img-fluid" width="30"/>
            </button>
          </div>
        <div className="modal-body">
            <div className="d-flex align-items-center justify-content-center py-1">
                <div className="sa-modal-imgContainer">
                    <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/s53-ae-num-009656545000.jpg?w=800&amp;dpr=1&amp;fit=default&amp;crop=default&amp;q=65&amp;vib=3&amp;con=3&amp;usm=15&amp;bg=F4F4F3&amp;ixlib=js-2.2.1&amp;s=d39e0cd4a19eb5c941a940c25efc8caf"
                    alt="" className=" img-circle img-fluid" />
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-center mt-2 px-1">
                <a href="#" className="btn sa-btn sa-btn-fade mr-2 sa-btn-br-0 col-6">Upload picture</a>
                <a href="#" className="btn sa-btn sa-btn-fade  sa-btn-br-0 col-6">Remove picture</a>
            </div>
        </div>
        <div className="modal-footer d-flex align-items-center justify-content-center">
          <button type="button" className="btn sa-btn col-12 sa-btn-br-0 ">Save changes</button>
        </div>
      </div>
    </div>
  </div>

   {/* <!-- Modal --> */}
   <div className="modal fade" id="passwordModal" tab-index="-1" aria-labelledby="passwordModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title m-0" id="passwordModalLabel">Change profile picture</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <img src="assets/icons/png/Circle Button.png" alt="" className="img-fluid" width="30"/>
            </button>
          </div>
          <form action="">
            <div className="modal-body">
                <div className="pt-1">
                <input type="password" placeholder="Enter old password" className="sa-inputfield" required />
                <input type="password" placeholder="Enter new password" className="sa-inputfield" required />
                <input type="password" placeholder="Enter confirm password" className="sa-inputfield" required />
                </div>
            </div>
            <div className="modal-footer d-flex align-items-center justify-content-center">
            <button type="submit" className="btn sa-btn col-12 sa-btn-br-0 ">Save changes</button>
            </div>
        </form>
      </div>
    </div>
  </div>


   {/* <!-- Modal --> */}
   <div className="modal fade" id="usernameModal" tab-index="-1" aria-labelledby="usernameModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title m-0" id="usernameModalLabel">Change Username</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <img src="assets/icons/png/Circle Button.png" alt="" className="img-fluid" width="30"/>
            </button>
          </div>
          <form action="">
            <div className="modal-body">
                <div className="pt-1">
                    <input type="text" placeholder="Enter new username" className="sa-inputfield" required />
                    <input type="password" placeholder="Confirm your password" className="sa-inputfield" required />
                </div>
            </div>
            <div className="modal-footer d-flex align-items-center justify-content-center">
                <button type="submit" className="btn sa-btn col-12 sa-btn-br-0 ">Save changes</button>
            </div>
        </form>
      </div>
    </div>
  </div>
    </Fragment>
    )
}

export default Pages
