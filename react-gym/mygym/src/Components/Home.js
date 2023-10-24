import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../Styling/home101.css';

function Home() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const form = useRef();

  const calculateBMI = () => {
    const parsedWeight = parseFloat(weight);
    const parsedHeight = parseFloat(height);

    if (isNaN(parsedWeight) || isNaN(parsedHeight) || parsedWeight <= 0 || parsedHeight <= 0) {
      alert('Please enter valid values for weight and height.');
      return;
    }

    const calculatedBMI = parsedWeight / ((parsedHeight / 100) * (parsedHeight / 100));
    setBMI(calculatedBMI.toFixed(2));
  };

  const sendemail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ppk0vmq', 'template_ice0fzr', form.current, '0zFq7IhRjhjABvhlJ')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <>
      <div>


                   
<div className="details">
    <div className="d-one">
        <h2>New to our gym???</h2>
        <h6>Come and experience a fitness journey with us have fun. </h6>
        <p>Our fitness experts can help you discover new training techniques and exercises that offer a dynamic and efficient full-body workout.</p>
        <a href="">Become a member today</a>
    </div>

    <div className="d-two">
        <h3>Working Hours</h3>
        <h5>Monday -Friday</h5>
        <h5 className="muted-text">8 am -11 pm</h5>
        <h5>Sunday </h5>
        <h5 className="muted-text">8 am -1 pm</h5>

    </div>
</div>

<div className="about">

    <div className="about-data">
        <h2> Welcome to Avengers</h2>
        <p>
            Here fitness meets dedication and results. Our gym is more than just a place to work out; it's a community of like-minded individuals striving to achieve their fitness goals. With state-of-the-art equipment and expert trainers, we provide a supportive and motivating environment for all fitness levels. Our commitment to your wellness journey goes beyond the gym floor, as we offer personalized fitness plans and nutritional guidance to help you reach your full potential. Join us today and be a part of our fitness family, where your success is our top priority.</p>
    </div>
    <div className="about-pics">
        <div className="about-one weightlifting" style={{ backgroundImage: 'url(images/51.png)' }}>
            <img src="" />
            <h3>weightlifting</h3>
            <p>Transform your body and increase your raw strength with our weightlifting program. Our experienced trainers will teach you proper techniques and help you reach new personal records, whether you're a novice or an experienced lifter.</p>
        </div>
        <div className="about-one bodybuilding" style={{ backgroundImage: 'url(images/54.png)' }}>
            <img src="" />
            <h3>Bodybuilding</h3>
            <p>Sculpt your physique and develop muscle definition with our bodybuilding training. Our dedicated coaches will design customized workout plans, focusing on specific muscle groups, to help you achieve the aesthetic results you desire.</p>
        </div>
        <div className="about-one Crossfit" style={{ backgroundImage: 'url(images/53.png)', }}>
            <img src="" />
            <h3>Crossfit</h3>
            <p> Dive into the world of high-intensity functional fitness with our Crossfit classes. Our dynamic workouts incorporate elements from various disciplines, ensuring a challenging and well-rounded fitness experience that will improve your overall strength and endurance.</p>
        </div>
        <div className="about-one boxing" style={{ backgroundImage: 'url(images/52.png)' }}>
            <img src="" />
            <h3>Boxing</h3>
            <p>Step into the ring and learn the art of boxing with our expert instructors. Whether you're looking to improve your self-defense skills or just want an intense full-body workout, our boxing classes offer the perfect blend of fitness and technique to help you reach your goals.
            </p>
        </div>
    </div>

</div>
<div className="section">
    <h2>Some heading </h2>
    <h4>Get to know our trainers and all</h4>
    <p>
        Our dedicated team of trainers is here to guide and motivate you on your fitness journey. With years of experience and a passion for helping clients succeed,
        our trainers will provide expert guidance tailored to your unique fitness goals.</p>
</div>
<div className="box2-container">
    <div className="box2-card">
        <div className="box2-img">

            <img src="images/18.png" />

        </div>
        <h2>Name abc</h2>
        <p> instructor</p>
        <p>icons facebook insta</p>
    </div>
    <div className="box2-card">
        <div className="box2-img">

            <img src="images/19.png" />

        </div>
        <h2>Name abc</h2>
        <p> instructor</p>
        <p>icons facebook insta</p>
    </div>
    <div className="box2-card">
        <div className="box2-img">

            <img src="images/25.png" />

        </div>
        <h2>Name abc</h2>
        <p> instructor</p>
        <p>icons facebook insta</p>
    </div>



</div>

<div className="bmicalc">
    <div className="calc">
        <h2>Calculate your BMI</h2>
        <p>Your Body Mass Index (BMI) is a measurement of the ratio of your weight to your height. It is a good way to gauge whether your weight is in a healthy proportion to your height. BMI helps determine any risk you may face if it's outside the healthy range.</p>
        <input type="text" id="weight" placeholder="Weight in kg" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <input type="text" id="height" placeholder="Height in cm" value={height} onChange={(e) => setHeight(e.target.value)} /><br />
        <button onClick={calculateBMI}>Calculate</button>
        <label aria-placeholder="result">Result: {bmi}</label>
    </div>
    <div className="bmipic">
        <img src="images/43.png" alt="BMI" />
    </div>
</div>

</div>

      <div className="contactus">
        <div className="top-text">
          <span>GET IN</span>
          <span style={{ color: 'orangered' }}>TOUCH</span>
        </div>

        <form ref={form} onSubmit={sendemail} className="contactus-elements">
          <div className="left-side">
            <h2>CONTACT US</h2>
            <input type="text" for="fname" name="fname" placeholder="First Name" />
            <input type="text" for="lname" name="lname" placeholder="Last Name" />
            <input type="email" for="email" name="email" placeholder="Email Address" />
            <input type="tel" for="number" name="number" maxlength="10" placeholder="Phone Number" />
            <input type="textarea" placeholder="Your Message" />
            <div className="submit-button">
              <button>Submit</button>
            </div>
          </div>
          <div className="right-side">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13326.555743183117!2d72.90007818311688!3d19.084287311514455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c62da38e777f%3A0x34c3a14c86f76434!2sGhatkopar%20Station%20(E)!5e0!3m2!1sen!2sin!4v1694965124021!5m2!1sen!2sin"
              width="60%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </form>
      </div>
    </>
  );
}

export default Home;
