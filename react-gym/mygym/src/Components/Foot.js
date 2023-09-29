import React from 'react'
import '../Styling/footer.css';

function footer() {
  return (
    <div>
       <footer className="footer-distributed">
    
    <div className="footer-left">

      <h3>Company<span>logo</span></h3>
      
      <p className="footer-links">
        <a href="/" className="link-1">Home</a>
        
        <a href="/">Blog</a>
      
        <a href="/">Pricing</a>
      
        <a href="/">About</a>
        
        <a href="/">Contact</a>
      </p>

     </div>

    <div className="footer-center">

      <div className="details">
        <i className="fa fa-map-marker"></i>
        <p><span>Joshi Lane,Tilak road</span> Pantnagar, Ghatkopar(east)</p>
      </div>

      <div className="details">
        <i className="fa fa-phone"></i>
        <p>+91 7045362152</p>
      </div>

      <div className="details">
        <i className="fa fa-envelope"></i>
        <p><a href="mailto:support@company.com">avengers@fitness.com</a></p>
      </div>

    </div>

    <div className="footer-right">

      <p className="footer-company-about">
        <span>About the company</span>
        At Avengers Fitness Gym, we are more than just a gym; we are a community of fitness enthusiasts dedicated to helping you achieve your health and wellness goals. Our mission is to empower individuals to lead healthier, happier lives through exercise, nutrition, and a supportive community. Also we have our second branch in THANE which also provides similar motives towards our members.
      </p>

      <div className="footer-icons">

        <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <a href="#"><i className="fa fa-github"></i></a>

      </div>

    </div>

  </footer>
      
    </div>
  )
}

export default footer
