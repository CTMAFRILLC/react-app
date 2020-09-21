import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class SocialLinks extends Component {
  render() {
    return (
        <div className="my-2 d-flex justify-content-between">
            <Link to={"#"} className="btn sa-df-btn">Google</Link>
            <Link to={"#"} className="btn sa-df-btn">Facebook</Link>
        </div>
    )
  }
}
