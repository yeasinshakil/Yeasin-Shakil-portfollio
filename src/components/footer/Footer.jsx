import React from 'react';
import './footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <div className="footer_logo">
                    <img src={logo} alt="" className="footer_title" />
                </div>
                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer_link">Projects</a>
                    </li>
                    <li>
                        <a href="#testimonial" className="footer_link">Testimonial</a>
                    </li>
                </ul>

                <div className="footer_social">
                    <a href="https://www.facebook.com/profile.php?id=100007637075299" className="footer_social_link" target='_blank'>
                        <i class="bx bxl-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com" className="footer_social_link" target='_blank'>
                        <i class="bx bxl-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/yeasin-shakil-15397714b/" className="footer_social_link" target='_blank'>
                        <i class="bx bxl-linkedin"></i>
                    </a>
                </div>
                <span className="footer_copy">&#169; Yeasin Shakil. All rights reserved</span>
            </div>
        </footer>
    );
};

export default Footer;