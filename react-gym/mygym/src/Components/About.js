import React from 'react'
import '../Styling/about.css';
import bgimage from "./11.png"


function About() {
    
  return (
    <div>
      
    <div className="heading" >
        <div className="head-tag">
            <h1> ABOUT US</h1>
            <p>Home  About</p>
        </div>
    </div>

    <div className="info">
        <img src="images/img.png" alt="workout "/>
        <div className="desc">
            <h1>Welcome to Avengers Fitness</h1>
            <h3>Our dedicated Ponigym areas and fitness experts can help you discover new training techniques and exercises that offer a dynamic and efficient full-body workout.</h3>
            <p>Our fitness experts can help you discover new training techniques. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        
    </div>

    
    <div className="features" style={{ background: 'transparent' }}>
        <div className="title">
            <h1>Why Choose Us</h1>
            <p>Our fitness experts can help you discover new training techniques.</p>
        </div>
        <div className="img-row">
            <div className="icon">
            <img src={"images/10.png"} alt="icon" style={{ mixBlendMode: 'multiply' }} />
<h1>WeightLifting</h1>
                <h3>Our gym is designed for weightlifting, is a fitness facility that primarily focuses on strength and resistance training.</h3>
                
            </div>

            <div className="icon">
            <img src={""} alt="icon" style={{ mixBlendMode: 'multiply' }} />
<h1>Specific Muscles</h1>
                <h3>You can focus and train on specific group of muscles and strengthen them </h3>
                
            </div>

            <div className="icon">
            <img src={""} alt="icon" style={{ mixBlendMode: 'multiply' }} />
 <h1>Flex Your Muscles</h1>
                <h3>Our gym provides good lightings and big mirror where you can flex your muscles.</h3>
            
            </div>

            <div className="icon">
            <img src={""} alt="icon" style={{ mixBlendMode: 'multiply' }} />

                <h1>Cardio</h1>
                <h3>We provide various cardio machine to keep up your health and burn those calories</h3>
                
            </div>
        </div>
    </div>

    
    <div className="trainer">
        <div className="tag">
            <h1>Our Trainer</h1>
            <p>Our fitness experts can help you discover new training techniques.</p>
        </div>
    </div>
    

    <div className="box1-container">
        <div className="box1-card">
            <div className="box1-img">
                
                <img src="images/trainer-1.png"/>
            
            </div>
            <div className="name">
                <h2>STEPHAINE</h2>
                <p>Gym Trainer</p>
            </div>

            <div className="socials">
            <a href="#"><i className="fab fa-instagram fa-xm" style={{ color: '#f75971' }}></i></a>
      <a href="#"><i className="fab fa-facebook fa-xm" style={{ color: '#2363d1' }}></i></a>
      <a href="#"><i className="fab fa-twitter fa-xm" style={{ color: '#0861fd' }}></i></a>
    </div>

            

        </div>

        <div className="box1-card">
            <div className="box1-img">
                
                <img src="images/trainer-1.png"/>
            
            </div>
            <div className="name">
                <h2>STEPHAINE</h2>
                <p>Gym Trainer</p>
            </div>

            <div className="socials">
            <a href="#"><i className="fab fa-instagram fa-xm" style={{ color: '#f75971' }}></i></a>
      <a href="#"><i className="fab fa-facebook fa-xm" style={{ color: '#2363d1' }}></i></a>
      <a href="#"><i className="fab fa-twitter fa-xm" style={{ color: '#0861fd' }}></i></a>
    </div>

            

        </div>

        <div className="box1-card">
            <div className="box1-img">
                
                <img src="images/trainer-1.png"/>
            
            </div>
            <div className="name">
                <h2>STEPHAINE</h2>
                <p>Gym Trainer</p>
            </div>

            <div className="socials">
            <a href="#"><i className="fab fa-instagram fa-xm" style={{ color: '#f75971' }}></i></a>
      <a href="#"><i className="fab fa-facebook fa-xm" style={{ color: '#2363d1' }}></i></a>
      <a href="#"><i className="fab fa-twitter fa-xm" style={{ color: '#0861fd' }}></i></a>
   </div>

            

        </div>

        <div className="box1-card">
            <div className="box1-img">
                
                <img src="images/trainer-1.png"/>
            
            </div>
            <div className="name">
                <h2>STEPHAINE</h2>
                <p>Gym Trainer</p>
            </div>

            <div className="socials">
            <a href="#"><i className="fab fa-instagram fa-xm" style={{ color: '#f75971' }}></i></a>
      <a href="#"><i className="fab fa-facebook fa-xm" style={{ color: '#2363d1' }}></i></a>
      <a href="#"><i className="fab fa-twitter fa-xm" style={{ color: '#0861fd' }}></i></a>
      </div>

            

        </div>



        
    </div>
    
        <div className="map">
            <p>COME FIND US!!</p>
            <iframe
      title="Google Maps"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13326.555743183117!2d72.90007818311688!3d19.084287311514455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c62da38e777f%3A0x34c3a14c86f76434!2sGhatkopar%20Station%20(E)!5e0!3m2!1sen!2sin!4v1694965124021!5m2!1sen!2sin"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      width="80%"
    ></iframe> </div>

       
        
    </div>
  )
}

export default About
