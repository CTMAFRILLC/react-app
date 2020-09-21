import React,{ Fragment } from 'react'

import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import { Link } from 'react-router-dom'


function Preview() {
    return (
      <Fragment>
        <Header />
    <main className="container-fluid">
        <div className="sa-wrapper-container row align-content-center justify-content-center">
            <div className="col-12">
                <div className="carousel sa-preview-carousel" data-flickity="{ &quot;wrapAround&quot;: true }">
                    <div className="carousel-cell col-3">
                        <div className="sa-carousel-imgContainer">
                            <img src="https://picsum.photos/280/320?random=4" alt="" className="img-fluid" />
                        </div>
                        <div className="sa-carousel-content text-center">
                            <div className="px-3 py-2">
                                <h3>cape coast castle</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                    tempor
                                    invidunt ut labore et dolore magna aliquyam erat, sed diam </p>
                            </div>
                            <div>
                                <Link to={"#"} className="btn sa-btn">watch preview</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-cell col-3">
                        <div className="sa-carousel-imgContainer">
                            <img src="assets/icons/png/image.png" alt="" />
                        </div>
                        <div className="sa-carousel-content text-center">
                            <div className="px-3">
                                <h3>cape coast castle</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                    tempor
                                    invidunt ut labore et dolore magna aliquyam erat, sed diam </p>
                            </div>
                            <div>
                                <Link to={"#"} className="btn sa-btn">watch preview</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-cell col-3">
                        <div className="sa-carousel-imgContainer">
                            <img src="assets/icons/png/image.png" alt="" />
                        </div>
                        <div className="sa-carousel-content text-center">
                            <div className="px-3">
                                <h3>cape coast castle</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                    tempor
                                    invidunt ut labore et dolore magna aliquyam erat, sed diam </p>
                            </div>
                            <div>
                                <Link to={"#"} className="btn sa-btn">watch preview</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-cell col-3">
                        <div className="sa-carousel-imgContainer">
                            <img src="assets/icons/png/image.png" alt="" />
                        </div>
                        <div className="sa-carousel-content text-center">
                            <div className="px-3">
                                <h3>cape coast castle</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                    tempor
                                    invidunt ut labore et dolore magna aliquyam erat, sed diam </p>
                            </div>
                            <div>
                                <Link to={"#"} className="btn sa-btn">watch preview</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-cell col-3">
                        <div className="sa-carousel-imgContainer">
                            <img src="assets/icons/png/image.png" alt="" />
                        </div>
                        <div className="sa-carousel-content text-center">
                            <div className="px-3">
                                <h3>cape coast castle</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                    tempor
                                    invidunt ut labore et dolore magna aliquyam erat, sed diam </p>
                            </div>
                            <div>
                                <Link to={"#"} className="btn sa-btn">watch preview</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-cell col-3">
                        <div className="sa-carousel-imgContainer">
                            <img src="assets/icons/png/image.png" alt="" />
                        </div>
                        <div className="sa-carousel-content text-center">
                            <div className="px-3">
                                <h3>cape coast castle</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                    tempor
                                    invidunt ut labore et dolore magna aliquyam erat, sed diam </p>
                            </div>
                            <div>
                                <Link to={"#"} className="btn sa-btn">watch preview</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
        <Footer />
      </Fragment>
    )
}

export default Preview
