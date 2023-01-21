import React, { useState } from 'react';
import './Qualification.css';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <section className="qualification">
            <h2 className="section_title">Qualifications</h2>
            <span className="section_subtitle">My Personal Journey</span>
            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className={
                        toggleState === 1 ? "qualification_button qualification_active button_flex" : "qualification_button button_flex toggle_color"
                    } onClick={()=> toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification_icons"></i>{" "} Education
                    </div>
                    <div className={
                        toggleState === 2 ? "qualification_button qualification_active button_flex " : "qualification_button button_flex toggle_color"
                    } onClick={()=> toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification_icons"></i>Experience
                    </div>
                </div>
                <div className="qualification_sections">
                    <div className={
                        toggleState === 1 ? "qualification_content qualification_content_active" : "qualification_content"
                    }>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Web Development</h3>
                                <span className="qualification_subtitle">W3 School.com</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt">2022</i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">Graphic Desgin</h3>
                                <span className="qualification_subtitle">UY Lab, Dhaka</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i> 2017
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">BBA</h3>
                                <span className="qualification_subtitle">Feni Govt College</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i> Dropout 2018
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">HSC</h3>
                                <span className="qualification_subtitle">Govt Commercial Collge, Feni</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i> 2016
                                </div>
                            </div>
                            
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">SSC</h3>
                                <span className="qualification_subtitle">Mosharrof Hossain High School</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i> 2014
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                    </div>

                    <div className={
                        toggleState === 2 ? "qualification_content qualification_content_active" : "qualification_content"
                    }>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Founder</h3>
                                <span className="qualification_subtitle">Burger Bro bd</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i> 2020 - 2021
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">Sales Exicutive</h3>
                                <span className="qualification_subtitle">Grameenphone</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i> 2018 - 2020
                                </div>
                            </div>
                            
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Graphic Designer</h3>
                                <span className="qualification_subtitle">A+ communication</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i> 2018-2019
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;