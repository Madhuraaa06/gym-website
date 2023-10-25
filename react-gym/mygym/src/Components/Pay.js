import React, { Component } from 'react';
import $ from 'jquery';

class Pay extends Component {
  componentDidMount() {
    // Load the Razorpay script dynamically
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = this.handleRazorpayScriptLoad;
    document.head.appendChild(script);
  }

  handleRazorpayScriptLoad = () => {
    // Initialize the Razorpay payment
    const options = {
      key: 'YOUR_RAZORPAY_API_KEY',
      amount: 999900, // Amount in currency subunits (e.g., paise)
      currency: 'INR',
      order_id: 'order_CgmcjRh9ti2lP7',
      name: 'Avengers Fitness',
      description: 'Membership',
      image: 'https://example.com/your_logo.jpg',
      prefill: {
        name: '',
        email: '',
      },
      theme: {
        color: '#F37254',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on('payment.success', this.handlePaymentSuccess);
    rzp.on('payment.error', this.handlePaymentError);

    // No need to trigger the Razorpay payment button click here
  };

  handlePaymentSuccess = (response) => {
    // Handle successful payment
    console.log('Payment successful:', response);
  };

  handlePaymentError = (error) => {
    // Handle payment error
    console.error('Payment error:', error);
  };

  handleButtonClick = () => {
    // Trigger the Razorpay payment
    const rzp = new window.Razorpay();
    rzp.open();
  };

  render() {
    return (
      <div>
        <p>Click the button below to initiate the payment:</p>
        <button onClick={this.handleButtonClick}>Pay with Razorpay</button>
      </div>
    );
  }
}

export default Pay;
