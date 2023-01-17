import React, { useState } from 'react';
import './header.css';

const header = () => {
    //========= Change Background header =============== 
    window.addEventListener('scroll', function() {
        const header = this.document.querySelector('.header');
        // when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with header tag.
        if(this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });

    //========= Toggle Menu =============== 
    const [Toggle, showMenu] = useState(false)

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav_logo">Shakil</a>
                <div className={Toggle ? 'nav_menu show_menu' : 'nav_menu'}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="#home" className="nav_link active_link">
                                <i className="uil uil-estate nav_icon"></i>Home
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#about" className="nav_link">
                                <i className="uil uil-user nav_icon"></i>About
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#skills" className="nav_link">
                                <i className="uil uil-file-alt nav_icon"></i>Skills
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="Services" className="nav_link">
                                <i className="uil uil-briefcase-alt nav_icon"></i>Services
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#portfollio" className="nav_link">
                                <i className="uil uil-scenery nav_icon"></i>Portfollio
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#contact" className="nav_link">
                                <i className="uil uil-message nav_icon"></i>Contact Me
                            </a>
                        </li>
                    </ul>
                <i className="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default header;