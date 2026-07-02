import harvard_logo from "./assets/images.png";

function Stack( {front, back, tec, certificates} ) {
    const listFront = front.map(front => 
    <li key={front.icon}>
        <i className={front.icon}></i>
        <span className="name-icon">{front.name}</span>
    </li>) 
    
    const listBack = back.map(back => 
    <li key={back.icon}>
         <i className={back.icon}></i>
         <span className="name-icon">{back.name}</span>
    </li>)

    const listTec = tec.map(tec => 
    <li key={tec.icon}>
        <i className={tec.icon} key={tec}></i>
        <span className="name-icon">{tec.name}</span>
    </li>)
    

    const listCertificates = certificates.map( certificates =>
    <li key={certificates.name}>
        <div className="cert-header">
            <img src={harvard_logo} alt="logo harvard" />
            <span className="name-icon">{certificates.name}</span>
        </div>
        
        <button className="btn-stack"> <a href="/public" download={certificates.file}>Baixe o certificado</a> </button>
    </li>

    )
    
    return (
        <div className="stack" id="stack">
            <h1>Stack e Certificados</h1>  
            <h2>Tecnologias e linguagens que trabalhei e trabalho atualmente</h2>
            <div className="stack-cards">
                
                <div className="stack-frontend">
                    <h3>Frontend</h3>

                    <ul className="list-frontend">
                        {listFront}
                    </ul>

                </div>

                <div className="stack-backend">
                    <h3>Backend</h3>

                    <ul className="list-backend">
                        {listBack}
                    </ul>

                </div>

                <div className="stack-tecnologies">
                    <h3>Tecnologias</h3>
                    <ul className="list-tec">
                        {listTec}
                    </ul>
                    
                </div>

                <div className="stack-certificates">
                    <h3>Certificados</h3>
                    <ul className="list-certificates">
                        {listCertificates}
                    </ul>
                </div>

            
            </div>
            
        </div>
    )
}

export default Stack