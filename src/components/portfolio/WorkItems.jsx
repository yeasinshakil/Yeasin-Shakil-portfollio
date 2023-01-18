import React from 'react';

const WorkItems = ({ item }) => {
    return (
        <div className="work_card" key={item.id}>
            <img src={item.image} alt="" className="work_img" />
            <h3 className="work_title">{item.title}</h3>
            <div className="work_button-fix">
                <a href="#" className="work_button" target='_blank'>
                    Demo <i className='bx bx-right-arrow-alt work_button-icon'></i>
                </a>
                <a href="https://github.com/YeasinShakil" target='_blank' className="work_button">
                    Code <i className="bx bxl-github"></i>
                </a>
            </div>
        </div>
    );
};

export default WorkItems;