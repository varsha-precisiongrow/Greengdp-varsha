import React from 'react'
import { Link } from 'react-router-dom';
import logo from  '../../asset/logo11.png';
import clogo from '../../asset/contact-logo.png';
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <div className="header">
        <div className="logo">
          <Link to="/"><img src={logo} alt="Logo" loading="lazy" /></Link>
        </div>
        <ul className='contact-btn'>
    <li className="d-block d-sm-none mx-5">
    <Link to="/contact"><img src={clogo} alt="contact logo" className='clogoo'/></Link>
    </li>
</ul>
        <div className="socialLinks d-none d-sm-block">
          <ul >
            <li>
              <Link to="https://www.facebook.com/PrecisionGrow/">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link to="https://x.com/i/flow/login?redirect_after_login=%2Fprecision_grow">
              <i class="fa-brands fa-square-x-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/company/precision-grow/">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/precisiongrow_/">
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
            <li>
                      <Link to="https://www.youtube.com/channel/UCt1nu8YiUMjnvckNLfepa5g">
                        <i class="fa-brands fa-youtube"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://precisiongrowindia.blogspot.com/">
                        <i class="fa-brands fa-blogger-b"></i>
                      </Link>
                    </li>
          </ul>
       
        </div>
      </div>
    </div>
  )
}

export default Navbar
