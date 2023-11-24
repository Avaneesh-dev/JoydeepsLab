import React from 'react';
import { NavLink } from 'reactstrap';
import "./Main.css"

function Footer(props) {
    return(
    <div className="footer">
        <div className='footer-spikes'></div>
        <div className="container mt-5">
            <div className="row justify-content-center">             
                <div className="col-4 col-sm-2 text-center">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><NavLink href='/home' className='text-white'>Home</NavLink></li>
                        <li><NavLink href='/research' className='text-white'>Research</NavLink> </li>
                        <li><NavLink href='/team' className='text-white'>Members</NavLink></li>
                        <li><NavLink href='/contact' className='text-white'>Contact Us</NavLink></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              Department of Agricultural &
		              Food Engineering, Indian Institute of Technology Kharagpur,
		              West Bengal, India - 731302<br />
		              <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:joydeep">
                         JoydeepsLab@email.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2023 Avaneesh Srivastava</p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Footer;