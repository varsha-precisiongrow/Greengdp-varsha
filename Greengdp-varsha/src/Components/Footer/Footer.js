import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from '../../asset/logo11.png'
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="mb-4 d-flex justify-content-evenly align-items-center">
        <img src={ logo} className="g-logo" alt="foot-logo"></img>

<Link to="/contact">
<button class="btn">JOIN THE MISSION</button>
</Link>
        </div>
     
        
       
        <div>

           <div className="socialLinks">
                  <ul>
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
                    <li>
                      <Link to="https://precisiongrow.co.in/">
                        <i class="fa-brands fa-flickr"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://soundcloud.com/precision-grow?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
                        <i class="fa-brands fa-soundcloud"></i>
                      </Link>
                    </li>
                    
                  </ul>
                </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
