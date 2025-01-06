import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css'; 
import axios from 'axios';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import Navbar from '../Section/Navbar';

Modal.setAppElement('#root');

const Contact = () => {
  const [otpDisplay, setOtpDisplay] = useState('hidden');
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isOtpRequested, setIsOtpRequested] = useState(false);
  const [otpValue, setOtpValue] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState({ success: false, error: null });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
    
    const script = document.getElementById('otpless-sdk');
    if (script) {
      const callback = (userinfo) => {
        const emailMap = userinfo.identities.find(item => item.identityType === 'EMAIL');
        const mobileMap = userinfo.identities.find(item => item.identityType === 'MOBILE')?.identityValue;
        console.log('User Info:', { email: emailMap?.identityValue, mobile: mobileMap, name: emailMap?.name || mobileMap?.name });
      };
      window.OTPlessSignin = new window.OTPless(callback);
    }
  }, []);

  const phoneAuth = () => {
    const phone = document.getElementById('phone').value;
    if (!phone) {
      alert("Please enter your number");
      return;
    }
    setOtpDisplay('visible');
    setIsOtpRequested(true);
    window.OTPlessSignin.initiate({ channel: 'PHONE', phone, countryCode: '+91' });
  };

  const verifyOTP = () => {
    window.OTPlessSignin.verify({
      channel: 'PHONE',
      phone: document.getElementById('phone').value,
      otp: document.getElementById('otp-input').value,
      countryCode: '+91',
    }).then(response => {
      if (response.success) {
        setIsOtpVerified(true);
        console.log('OTP Verified Successfully');
      } else {
        alert("Incorrect Credentials");
        setIsOtpVerified(false);
      }
    }).catch(error => {
      console.error('Error verifying OTP:', error);
      setIsOtpVerified(false);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ success: false, error: null });

    if (!isOtpVerified) {
      alert('Please verify the OTP before submitting the form.');
      return;
    }

    try {
      // Hardcoding the domain name as 'greengdp'
      const domainName = 'greengdp'; // Use the custom domain name

      const response = await axios.post('https://ecbsf-backend.azurewebsites.net/api/contact/send', {
        ...formData,
        domain: domainName,  // Add domain name to the form data
      });

      if (response.status === 200) {
        setStatus({ success: true, error: null });
        setFormData({ name: '', email: '', phone: '', message: '' });
        setOtpValue('');
        setIsOtpVerified(false);
        setIsOtpRequested(false);
        setModalIsOpen(true);
        // console.log(response);
      }
    } catch (error) {
      setStatus({ error: 'Something went wrong. Please try again later.', success: false });
    }
  };

  return (
    <div>
      <Navbar />
      <main>
        <div className="container-Contact">
          <span className="big-circle"></span>
          <img src="img/shape.png" class="square" alt="" loading='lazy'/>
          <div className="form">
            <div className="contact-info">
              <h3 className="title">Let's get in touch</h3>
              <h4><i className="fas fa-map-marker-alt"></i> Regd Office:</h4>
              <p>B-155, Ground Floor, Vashi Plaza, Sector-17, Vashi, Mumbai, 400703</p>
              <h4><i className="fas fa-map-marker-alt"></i> Project Office:</h4>
              <p>61, City Tower, Unit No 2, Dr. S.S. Rao Road, Parel, Mumbai, 400012</p>
              <div className="info">
                <div className="information">
                  <i className="fas fa-envelope"></i>
                  <p>mail@precisiongrow.co.in</p>
                </div>
                <div className="information">
                  <i className="fas fa-phone"></i>
                  <p>+91 - 8097283444</p>
                </div>
              </div>
              <div className="social-media">
                <p>Connect with us :</p>
                <div className="social-icons">
                  <Link to="https://www.facebook.com/PrecisionGrow/" target="_blank"><i className="fab fa-facebook-f"></i></Link>
                  <Link to="https://x.com/i/flow/login?redirect_after_login=%2Fprecision_grow" target="_blank"><i className="fab fa-twitter"></i></Link>
                  <Link to="https://www.instagram.com/precisiongrow_/" target="_blank"><i className="fab fa-instagram"></i></Link>
                  <Link to="https://www.linkedin.com/company/precision-grow/" target="_blank"><i className="fab fa-linkedin-in"></i></Link>
                  <Link to="https://precisiongrowindia.blogspot.com/" target="_blank"><i className="fa-brands fas fa-blogger"></i></Link>
                  <Link to="https://www.youtube.com/channel/UCt1nu8YiUMjnvckNLfepa5g" target="_blank"><i className="fa-brands fas fa-youtube"></i></Link>
                  <Link to="https://soundcloud.com/precision-grow" target="_blank"><i className="fa-brands fas fa-soundcloud"></i></Link>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <form onSubmit={handleSubmit} autoComplete="off">
                <h3 className="title">Contact us</h3>
                <div className="input-container">
                  <input type="text" name="name" className="input" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="input-container">
                  <input type="email" name="email" className="input" placeholder="Email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="input-container">
                  <input type="tel" name="phone" className="input" id="phone" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} required />
                  <button className='requestOtp' type="button" onClick={phoneAuth}>Request OTP</button>
                  {isOtpRequested && (
                    <div className={`otp-${otpDisplay}`}>
                      <input className='enterOtp' id="otp-input" placeholder="Enter OTP" value={otpValue} onChange={(e) => setOtpValue(e.target.value)} />
                      <button className='verifyotp' type="button" onClick={verifyOTP}>Verify OTP</button>
                    </div>
                  )}
                </div>
                <div className="input-container textarea">
                  <textarea name="message" className="input" placeholder="Write Your Message" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                {isOtpVerified ? (
                    <input type="submit" value="Send" className="btn" disabled={!isOtpVerified} />
                  ) : (
                    <p>Please verify the number to submit the form.</p>
                  )}
                <div className="my-3">
                  {status.error && <div className="error-message">{status.error}</div>}
                  {status.success && <div className="sent-message">Your message has been sent. Thank you!</div>}
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Modal for success message */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Success Message"
          className="Modal"
          overlayClassName="Overlay"
        >
          <h2>Thank You!</h2>
          <p>Your message has been sent successfully.</p>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </Modal>
      </main>
    </div>
  );
};

export default Contact;
