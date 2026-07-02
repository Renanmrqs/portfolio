import renanImage from './assets/logo-red.png';

function Hero() {
    return (
        <div className="hero">
            
            <div className='text-hero'>
                <h2>Renan - Desenvolvedor Backend Python</h2>
                <p>Ola, sou o Renan, Desenvolvedor com foco em backend com python, mas tenho um interesse por todas as areas de desenvolvimento, Frontend com react,
                    banco de dados com PostgreSQL, alem do backend. Busco uma oportunidade estagio para 
                    aplicar meus conhecimentos.
                </p>

                <div className="hero-btn">
                <a className='btn-projects' href="#projects">Veja meus projetos</a> 
                <a className='btn-cv' href="/public/curriculo_renan.pdf" download="Curriculo-Renan.pdf" >Baixe meu curriculo</a>
                </div>

            </div>

            <div className="img-hero">
                <img src={renanImage} alt="Renan Img"/>
            </div>
            

            
            

            
        </div>
        
    )
}

export default Hero