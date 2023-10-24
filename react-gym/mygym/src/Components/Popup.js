// Popup.js
import React from 'react';
import '../Styling/loginpopup.css';

const Popup = ({ onClose , text}) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Thankyou</h2>
        <p>{text}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
