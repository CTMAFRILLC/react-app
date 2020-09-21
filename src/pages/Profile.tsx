import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
function Profile() {
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
  <main className="container p-0">
    <div className="row sa-wrapper-container align-items-start pt-4">
    <aside className="sa-dashboard-aside col-lg-3">
              <nav className="py-2">
                <ul>
                  <li><Link to={"/dashboard"}>dashboard</Link></li>
                  <li className="active"><Link to={"/profile"}>profile</Link></li>
                  <li><Link to={"/payments"}>payments</Link></li>
                  <li><Link to={"/inbox"}>inbox</Link></li>
                  <div className="sa-dashboad-divider">
                    <div className="py-5" />
                    <div className="py-5" />
                  </div>
                  <li><Link to={"#"}><img src="assets/icons/svg/signout.svg" alt="" /> sign out</Link></li>
                </ul>
              </nav>
            </aside>
      <div className="sa-dashboard-main col-lg-9">
        <div className="sa-dashboard-title py-2">
          <h1>Profile</h1>
        </div>
        <div className="sa-toursite-desc sa-preveiw-dashboad">
                        <div className="row align-items-center justify-content-between sa-dashboard-inputfield">
                            <div className="col-2 pl-0">
                                <p className="m-0">username</p>
                            </div>
                            <div className="col-8">
                                <p className="m-0">johnblack</p>
                            </div>
                            <div className="pr-2">
                                <a href="#"   data-toggle="modal" data-target="#usernameModal">Edit</a>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-between sa-dashboard-inputfield">
                            <div className="col-2 pl-0">
                                <p className="m-0">email address</p>
                            </div>
                            <div className="col-8">
                                <p className="m-0">johnblack@gmail.com</p>
                            </div>

                            <div className="pr-2">
                                <a href="#">Edit</a>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-between sa-dashboard-inputfield">
                            <div className="col-2 pl-0">
                                <p className="m-0">password</p>
                            </div>
                            <div className="col-8">
                                <p className="m-0">***********</p>
                            </div>
                            <div className="pr-2">
                                <a href="#"  data-toggle="modal" data-target="#passwordModal">Edit</a>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-between sa-dashboard-inputfield">
                            <div className="col-2 pl-0">
                                <p className="m-0">language</p>
                            </div>
                            <div className="col-8">
                                <p className="m-0">English-UK</p>
                            </div>
                            <div className="pr-2">
                                <a href="#">Edit</a>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-between sa-dashboard-inputfield">
                            <div className="col-2 pl-0">
                                <p className="m-0">Profile Picture</p>
                            </div>
                            <div className="pr-2">
                                <a href="#"  data-toggle="modal" data-target="#profileModal">Edit</a>
                            </div>
                        </div>
                    </div>
      </div>
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

export default Profile
