import { useState, useEffect } from 'react'

const Projects = (props) => {
    const [projects, setProjects] = useState(null)
    const updateProjects = async () => {
        const response = await fetch(props.URL + 'projects')
        console.log(response)
        const data = await response.json()
        setProjects(data)
    }
    // eslint-disable-next-line
    useEffect(() => updateProjects(), [])

      const loaded = () => {
        return projects.map((project) => (
          <div>
            <h1>{project.name}</h1>
            {/* eslint-disable-next-line */}
            <img src={project.image} />
            <a href={project.git}>
              <button>Github</button>
            </a>
            <a href={project.live}>
              <button>live site</button>
            </a>
          </div>
        ));
      };
    
      return projects ? loaded() : <h1>Loading...</h1>;
    }
    
    export default Projects;