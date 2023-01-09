import React from 'react';
import './about.css'
import Info from './Info';
import about_photo from '../../assets/about.jpg'

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="seciton_title">About Me</h2>
            <span className="section_subtitle">My Introduction</span>
            <div className="about_container container grid">
                <img src={about_photo} alt="" className="about_img" />
                <div className="about_data">
                    <Info></Info>
                    <p className="about_description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus dignissimos asperiores quas dolore id, ullam rerum temporibus. Perferendis cumque dolore laborum provident odio voluptates tempore illum, repellat deleniti error eos itaque, labore delectus recusandae laboriosam? Nam sit fugit earum. Ullam.</p>
                    <a download='' href="../../assets/John-Cv.pdf" className="button button_flex">Download CV</a>
                </div>
            </div>
        </section>
    );
};

export default About;