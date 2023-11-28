import React, { useEffect, useState } from 'react'
import { projectData } from './Data'
import { projectNav } from './Data'
import WorkItems from './WorkItems';

const Works = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setprojects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'all') {
      setprojects(projectData);
    }

    else{
      const newProjects = projectData.filter((project) => {
        return project.category === item.name;
      });
      setprojects(newProjects);
    }
  }, [item]);

  const handleClick = (e,index) =>{
    setItem({name: e.target.textContet});
  };
  return (
    <div>
      <div className="work__filters">
        {projectNav.map((item, index) =>{
          return(
            <span className="work__item" onClick={(e) =>{
              handleClick(e, index);
            }} key={index}>
              
            </span>
          );
        })}
      </div>
      <div className="work__container cotainer grid">
        {projects.map((item)=>{
          return <WorkItems item={item} key={item.id} />
        })}
      </div>
    </div>
  );
};

export default Works
