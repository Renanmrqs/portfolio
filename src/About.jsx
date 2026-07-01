import { useState } from "react"

function About( {about} ) {
    const [hidenAbout, SetHiddenAbout] = useState(false)
    
    return (
        <div className="about">
        <h1>Minha Jornada</h1>
                 
            {about.map(hidenAbout === 'false' ? (about.slice(1,2)) :(about) => (
            <div className="card-about" key={about.title}> 
                <h3 className="title-about">{about.title} - {about.year}</h3>
                <h2 className="subtitle-about">{about.subtitle}</h2>
                <p className="description-about">{about.description}</p>
            </div>
            ))}                
        <button onClick={(e) => SetHiddenAbout(true)}>Ver mais sobre</button>
        </div>
    )
}

export default About