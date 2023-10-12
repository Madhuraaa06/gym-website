import React from 'react'
import '../Styling/pricing.css';

function Pricing() {
  return (
    <div>
      
      <div className="header" style={{ backgroundImage: 'url(images/heading.png)' }}>
  

        <h1>Services</h1>
        <p>Home `&gt;` Services</p>
    </div>

    <div className="feature-tag">
        <h3>WHAT WE DO?</h3>
        <h1>PUSH YOUR LIMITS FORWARD</h1>
    </div>

    <div className="feature">
        <div className="box">
            <div className="image">
                <img src="images/strength.png" alt="image"/>
            </div>
            <h1>Strength Training</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis</p>
        </div>

        <div className="box">
            <div className="image">
                <img src="images/strength.png" alt="image"/>
            </div>
            <h1>Strength Training</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis</p>
        </div>

        <div className="box">
            <div className="image">
                <img src="images/strength.png" alt="image"/>
            </div>
            <h1>Strength Training</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis</p>
        </div>

        <div className="box">
            <div className="image">
                <img src="images/strength.png" alt="image"/>
            </div>
            <h1>Strength Training</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis</p>
        </div>
    </div>

    <div className="price-tag">
        <h3>OUR PLAN</h3>
        <h1>CHOOSE YOUR PRICING PLAN</h1>
    </div>



    <div className="boxes">
        <div className="skewed">
            <div className="price-box">
                <h3>3 Month Membership</h3>
                <div className="price">
                    <h2>₹ 4500</h2>
                    
                </div>
                <ul>
                    <li><i className="fa-light fa-check fa-xs"></i><span>✓</span> Unlimited equipment</li>
                    <li><i className="fa-light fa-check fa-xs"></i><span>✓</span> Crossfit sessions</li>
                    <li><i className="fa-light fa-check fa-xs"></i><span>✓</span> Experienced trainers</li>
                    <li><i className="fa-light fa-check fa-xs"></i><span>✓</span> BMI reports</li>
                    <li><i className="fa-light fa-check fa-xs"></i><span>✓</span> Diet consultation</li>
                </ul>
                <a href="#" className="buy-btn">
                    Enroll Now
                </a>
            </div>
        </div>

        <div className="skewed">
            <div className="price-box">
                <h3>6 Month Membership</h3>
                <div className="price">
                    <h2>₹ 7500</h2>
                    
                </div>
                <ul>
                    <li><i className="fa-light fa-check fa-xs"></i><span>✓</span> Crossfit sessions</li>
                    <li><i className="fa-light fa-check fa-xs"></i><span>✓</span> Experienced trainers</li>
                    <li><i className="fa-light fa-check fa-xs"></i><span>✓</span> BMI reports</li>
                    <li><i className="fa-light fa-check fa-xs"></i><span>✓</span> Diet consultation</li>
                    <li><i className="fa-light fa-check fa-xs"></i><span>✓</span> Unlimited equipment</li>
                </ul>
                <a href="#" className="buy-btn">
                    Enroll Now
                </a>
            </div>
        </div>

        <div className="skewed">
            <div className="price-box">
                <h3>12 Month Membership</h3>
                <div className="price">
                    <h2>₹ 9999</h2>
                    
                </div>
                <ul>
                    <li><i className="fa-light fa-check fa-xs"></i><span>✓</span> Unlimited equipment</li>
                    <li><i className="fa-light fa-check fa-xs"></i><span>✓</span> Crossfit sessions</li>
                    <li><i className="fa-light fa-check fa-xs"></i><span>✓</span> Experienced trainers</li>
                    <li><i className="fa-light fa-check fa-xs"></i><span>✓</span> BMI reports</li>
                    <li><i className="fa-light fa-check fa-xs"></i><span>✓</span> Diet consultation</li>
                </ul>
                <a href="#" className="buy-btn">
                    Enroll Now
                </a>
            </div>
        </div>

    </div>

    </div>
  )
}

export default Pricing
