import { useState } from "react"

function About( {about} ) {
    const [hidenAbout, setHiddenAbout] = useState(false)
    
    function aboutSliced(about) {
        if (hidenAbout == false) {
            return about.slice(0, 2)
        } else {
            return about
        }
    }
        
    const arrayMap = aboutSliced(about) 
    
    return (
        <div className="about">
        <h1>Minha Jornada</h1>
                 
            {about.map( (arrayMap) => (
            <div className="card-about" key={about.title}> 
                <h3 className="title-about">{about.title} - {about.year}</h3>
                <h2 className="subtitle-about">{about.subtitle}</h2>
                <p className="description-about">{about.description}</p>
            </div>
            ))}                
        <button onClick={() => setHiddenAbout(false)}>
            Ver mais 
            </button>
        </div>
    )
}

export default About