import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter, faDribbble } from "@fortawesome/free-brands-svg-icons";
import './Footer.css'

const Footer = () => {
    return (
      //  <!-- footer starts -->
        <footer >
            <div className="container">
                <div className="row my-5">   
                  <div className="col-md-4 pt-5 d-flex align-items-center flex-column ">
                    <div className="d-flex flex-column">
                        <img src='https://i.ibb.co/TYxWSB7/Group-86.png' alt=''/>
                        <div className='d-flex mt-4 footer-brands  '>
                            <FontAwesomeIcon className='mr-4'size='2x' icon={faFacebook} />
                            <FontAwesomeIcon className='mr-4' size='2x' icon={faTwitter} />
                            <FontAwesomeIcon className='mr-4' size='2x' icon={faLinkedin} />
                            <FontAwesomeIcon className='mr-4' size='2x' icon={faDribbble} />
                        </div>
                    </div>
                  </div>
    
                    <div className="col-md-6 offset-md-1 text-center text-md-left">
                        <div className="row text-muted ">
                            <div className="col-md-4 pt-5 list-unstyled">                         
                                <li>Feature</li>
                                <li>Enterprise</li>
                                <li>Pricing</li>
                            </div>
                            <div className="col-md-4 pt-5 list-unstyled">                          
                                <li>Blog</li>
                                <li>Help Center</li>
                                <li>Contact Us</li>
                                <li>Status</li>
                            </div>
                            <div className="col-md-4 pt-5 list-unstyled">
                                <li>About Us</li>
                                <li>Terms of Service</li>
                                <li>Security</li>                               
                                <li>Login</li>                               
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
   // <!-- footer ends -->
    );
};

export default Footer;