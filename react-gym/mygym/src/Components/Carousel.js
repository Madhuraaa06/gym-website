import React from 'react'

import '../Styling/home.css';

function Carousel() {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="images/10.png" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">

                                    <p>New way to build A healthy Lifestyle</p>

                                    <button className="carousel-b">Get Started</button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="images/13.png" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">

                                    <p>New way to build A healthy Lifestyle</p>
                                    <button className="carousel-b">JOIN US NOW</button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="images/9.png" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">

                                    <p>New way to build A healthy Lifestyle</p>
                                    <button className="carousel-b">JOIN US NOW</button>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div> 
    </div>
  )
}

export default Carousel
