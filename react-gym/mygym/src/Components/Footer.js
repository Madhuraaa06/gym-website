import React from 'react'
import '../Styling/footerstyle.css'; 

function footer() {
  return (
    <>
     <footer >
            <div className="foot">
                <p className="footer-company-about">
                    <span>About the company</span>
                    At Avengers Fitness Gym, we are more than just a gym; we are a community of fitness enthusiasts dedicated to helping you achieve your health and wellness goals. Our mission is to empower individuals to lead healthier, happier lives through exercise, nutrition, and a supportive community. Also we have our second branch in THANE which also provides similar motives towards our members.
            
                </p>
            
    
    
    
                <div className="footer-center">
                    <h1>Contact us</h1>
    
                    <div className="details1">
                        <i className="fa fa-map-marker"></i>
                        <p>Joshi Lane,Tilak road Pantnagar,<br/> Ghatkopar(east)</p>
                    </div>
              
                    <div className="details1">
                        <i className="fa fa-phone"></i>
                        <p>+91 7045362152</p>
                    </div>
              
                    <div className="details1">
                        <i className="fa fa-envelope "></i>
                        <p><a href="mailto:support@company.com">avengers@fitness.com</a></p>
                   </div>
              
                </div>
    
    
    
                <div className="explore">
                    <h1>Explore us</h1>
    
                    <p className="footer-links">
                        <a href="#" className="link-1">Home</a>
                        
                        <a href="#">Blog</a>
                      
                        <a href="#">Pricing</a>
                      
                        <a href="#">About</a>
                        
                        <a href="#">Contact</a>
                    </p>
    
                </div>
            </div>
            
        
                
            <div className="social">
    
            <a href="#">
        <i className="fa fa-facebook fa-xm" style={{ color: 'white' }}></i>
      </a>
      <a href="#">
        <i className="fa fa-twitter fa-xm" style={{ color: 'white' }}></i>
      </a>
      <a href="#">
        <i className="fa fa-instagram fa-xm" style={{ color: 'white' }}></i>
      </a>
      <a href="#">
        <i className="fa fa-linkedin fa-xm" style={{ color: 'white' }}></i>
      </a> 
    
            </div>
    
            <div className="copyright">
                <p> Copyright © 2020.<span> All Rights Reserved.</span> </p>
        
            </div>
            
        </footer>
    </>
     
  )
}

export default footer
