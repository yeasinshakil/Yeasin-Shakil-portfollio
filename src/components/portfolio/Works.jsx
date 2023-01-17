import React from 'react';
import { projectData } from '../portfolio/Data';
import { projectNav } from '../portfolio/Data';
import WorkItems from './WorkItems';

const Works = () => {
    return (
        <div>
            <div className="work_filters">
                {
                    projectNav.map((item, index) => {
                        return (
                            <span className="work_item" key={index}>
                                {item.name}
                            </span>
                        );
                    })
                };
            </div>
            <div className="work_container container grid">
                {
                    projectData.map((item) => {
                        return (<WorkItems item={item} key={item.id}></WorkItems>)
                    })
                }
            </div>

        </div>
    );
};

export default Works;