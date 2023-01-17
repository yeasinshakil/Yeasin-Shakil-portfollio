import React, { useEffect, useState } from 'react';
import { projectData } from '../portfolio/Data';
import { projectNav } from '../portfolio/Data';
import WorkItems from './WorkItems';

const Works = () => {
    const [item, setItem] = useState({name: 'all'});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(()=> {
        if(item.name === 'all') {
            setProjects(projectData);
        }
        else {
            var newProjects = projectData.filter((project)=> {
                return project.catagory === item.name;
            });
        }
        setProjects(newProjects);
    }, [item])


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