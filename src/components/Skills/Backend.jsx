import React from 'react';

const Backend = () => {
    return (
        <div className='skills_content'>
        <h3 className="skills_title">Backend Devlopment
        {/* <span className='back-end-extra'>(just for decorating website)</span> */}
        </h3>
        
        <div className="skills_box">
            <div className="skills_group">
                <div className="skills_data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills_name">Firebase</h3>
                        <span className="skills_level">Basic</span>
                    </div>
                </div>
                <div className="skills_data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills_name">Strapi</h3>
                        <span className="skills_level">Basic</span>
                    </div>
                </div>
                
            </div>
            <div className="skills_group">
                
                <div className="skills_data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills_name">Wordpress CMS</h3>
                        <span className="skills_level">Basic</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    );
};

export default Backend;