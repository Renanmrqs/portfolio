import { useState } from "react"

function About( {about} ) {
    const [hidenAbout, setHiddenAbout] = useState(false)
    const [nameBtn, setNameBtn] = useState('Ver Mais')

        
    const arrayMap = hidenAbout ? about : about.slice(0, 2);
    
    return (
        <div className="about" id="about">
        <h1>Minha Jornada</h1>
                 
            {arrayMap.map( (arrayMap) => (
            <div className="card-about" key={arrayMap.title}> 
                <h3 className="title-about">{arrayMap.title} - {arrayMap.year}</h3>
                <h2 className="subtitle-about">{arrayMap.subtitle}</h2>
                <p className="description-about">{arrayMap.description}</p>
            </div>
            ))}                
        <button className="about-btn"  onClick={() => hidenAbout ? setHiddenAbout(false) & setNameBtn('Ver mais') : setHiddenAbout(true) & setNameBtn('Ver menos')}>
            {nameBtn}
            </button>
        </div>
    )
}

export default About