import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class SideNav extends Component {
  render() {
    return (
        <aside className="sa-dashboard-aside col-lg-3">
            <nav className="py-2">
                <ul>
                    <li className="active"><Link to={"dashboard"}>dashboard</Link></li>
                    <li><Link to={"/dashboard/profile"}>profile</Link></li>
                    <li><Link to={"/dashboard/payments"}>payments</Link></li>
                    <li><Link to={"/dashboard/inbox"}>inbox</Link></li>
                    <div className="sa-dashboad-divider">
                        <div className="py-5"></div>
                        <div className="py-5"></div>
                    </div>
                    <li><Link to={"#"}><img src="assets/icons/svg/signout.svg" /> sign out</Link></li>
                </ul>
            </nav>
        </aside>
    )
  }
}
