import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Resources/StyleSheets/Projects.css';


function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await axios.get('https://panchami-associates-backend.onrender.com/projects');
        setProjects(response.data.data);
        console.log(response.data.data)
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }

    fetchProjects();
  }, []);

 
  return (
    <div className='projects'>

    <h1>Project Catalog</h1>

    <div className='project-gallery'>
      {projects.map((project =>{
        return <img src={project.imageUrl} className='project-img' alt={project.id}></img>
      }))
      
    }</div>

    </div>
  );
}

export default ProjectList;
