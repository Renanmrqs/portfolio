function Projects({project_name, project_description, git_link, project_link, stack}) {
    const listStack = stack.map(stack => <i className={stack}></i>) 
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