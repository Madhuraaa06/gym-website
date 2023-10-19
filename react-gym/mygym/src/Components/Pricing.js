import React from 'react'
import '../Styling/pricing.css';

function Pricing() {
  return (
    <div>
      
      <div className="header" style={{ backgroundImage: 'url(images/heading.png)' }}>
  

        <h1>Services</h1>
        <p>Home &gt; Services</p>
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
            <p> Our Gym provide a selection of weightlifting equipment, including free weights (dumbbells, barbells), weight machines, and resistance bands, to help members build and tone their muscles.</p>
        </div>

        <div className="box">
            <div className="image">
                <img src="images/strength.png" alt="image"/>
            </div>
            <h1>Personal Training</h1>
            <p>Our gym have personal trainers on staff who can provide customized workout plans, guidance, and motivation for individuals seeking more personalized fitness instruction.</p>
        </div>

        <div className="box">
            <div className="image">
                <img src="images/strength.png" alt="image"/>
            </div>
            <h1>Group Exercise</h1>
            <p>Our gym offer a variety of group fitness classes, such as yoga, spinning, Zumba, aerobics, and more, led by certified instructors.</p>
        </div>

        <div className="box">
            <div className="image">
                <img src="images/strength.png" alt="image"/>
            </div>
            <h1>CardioVascular Equipment</h1>
            <p>Our gym typically have a range of cardio machines such as treadmills, stationary bikes, elliptical trainers, and rowing machines to help members improve their cardiovascular fitness.</p>
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
                    <li><span>✓</span> Unlimited equipment</li>
                    <li><span>✓</span> Crossfit sessions</li>
                    <li><span>✓</span> Experienced trainers</li>
                    <li><span>✓</span> BMI reports</li>
                    <li><span>✓</span> Diet consultation</li>
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
                    <li><span>✓</span> Crossfit sessions</li>
                    <li><span>✓</span> Experienced trainers</li>
                    <li><span>✓</span> BMI reports</li>
                    <li><span>✓</span> Diet consultation</li>
                    <li><span>✓</span> Unlimited equipment</li>
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
                    <li><span>✓</span> Unlimited equipment</li>
                    <li><span>✓</span> Crossfit sessions</li>
                    <li><span>✓</span> Experienced trainers</li>
                    <li><span>✓</span> BMI reports</li>
                    <li><span>✓</span> Diet consultation</li>
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
