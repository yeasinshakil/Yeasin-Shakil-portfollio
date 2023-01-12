import React from 'react';
import Backend from './Backend';
import Frontend from './Frontend';
import './Skill.css';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="seciton_title">Skills</h2>
            <span className="section_subtitle">My technical Level</span>
            <div className="skills_container container grid">
                <Frontend></Frontend>
                <Backend></Backend>
            </div>
        </section>
    );
};

export default Skills;