function Projects({project_name, project_description, git_link, project_link, stack}) {
    const listStack = stack.map(stack => <i className={stack}></i>) 
    return (
        <div className="project-card" id="projects">
            <h1 className="project-tittle">{project_name}</h1>
                <p className="project-description">
                    {project_description}
                </p>
                
                <div className="project-stack">
                    <ul>
                        {listStack}
                    </ul>
                </div>
                    <div className="project-btn">
                        <button className="project-link">{project_link}</button>
                        <button className="project-git">{git_link}</button>
                    </div>
        </div>
    )
}

export default Projects