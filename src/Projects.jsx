import { useState, useEffect } from 'react';

function Projects({repo, project_link, project_name,stack}) {
    const listStack = stack.map(stack => <i className={stack} key={stack}></i>) 
    const [project_description, setProjectDescription] = useState(null);
    const [git_link, setGitLink] = useState(null);

    
            

        useEffect(() => {
            const fetchData = async () => {
            try {
                const response = await fetch(`https://api.github.com/repos/Renanmrqs/${repo}`)
            
            const json = await response.json()
            console.log(json)
            setProjectDescription(json.description)
            setGitLink(json.html_url)
            } catch (error) {
                console.log(error)
            }
        }
    fetchData()}, []
)
       
    

    
    
    return (
    
    <div className="project-card" id="projects">
        <h1 className="project-tittle">{project_name}</h1>
            <p className="project-description">
                {project_description}
            </p>
            
            <div className="project-stack">
                <ul className="list-stack">
                    {listStack}
                </ul>
            </div>
                <div className="project-btn">
                    <button className="project-link"> <a href={project_link} target="blank">Acesse o projeto</a></button>
                    <button className="project-git"> <a href={git_link} target="blank">Acesse o repositorio</a></button>
                </div>
    </div>
    
    )
}


export default Projects