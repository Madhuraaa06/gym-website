import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Styling/contact.css';

function Contact() {
  const form = useRef();

  const sendemail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ppk0vmq', 'template_ice0fzr', form.current, '0zFq7IhRjhjABvhlJ')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <div>
      <div className="contactus-header" style={{ backgroundImage: 'url(images/20.png)' }}>
        <h2>CONTACT</h2>
      </div>

      <div className="cmap">
        <p>
          "Navigate Your Fitness Journey with Us: <br />
          <span style={{ color: '#101027', fontWeight: 'bold' }}>Every Step Counts!</span>"
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13326.555743183117!2d72.90007818311688!3d19.084287311514455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c62da38e777f%3A0x34c3a14c86f76434!2sGhatkopar%20Station%20(E)!5e0!3m2!1sen!2sin!4v1694965124021!5m2!1sen!2sin"
          height="450"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="text">
        <p>We're here to assist you on your fitness journey. Whether you have questions, feedback, or need assistance, our team is ready to help!!</p>
      </div>

      <div className="contactus">
        <div className="top-text">
          <span>GET IN</span>
          <span style={{ color: '#101027', fontWeight: 'bold' }}>TOUCH</span>
        </div>

        <form ref={form} onSubmit={sendemail} className="contactus-elements">
          <div className="left-side">
            <input type="text" htmlFor="fname" name="fname" placeholder="First Name" />
            <input type="text" htmlFor="lname" name="lname" placeholder="Last Name" />
            <input type="email" htmlFor="email" name="email" placeholder="Email Address" />
            <input type="tel" htmlFor="number" name="number" maxLength="10" placeholder="Phone Number" />
          </div>
          <div className="right-side">
            <textarea rows="5" cols="70" className="textarena" name="msg" placeholder="Your text"></textarea>
          </div>
          <div className="contact-submit-button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
