function Hero() {
    return (
        <div className="hero">
            <h2>Renan - Desenvolvedor Backend Python (hero)</h2>
            <p>Ola, sou o Renan, Desenvolvedor com foco em backend com python, mas tenho um interesse por todas as areas de desenvolvimento, Frontend com react,
                banco de dados com PostgreSQL, alem do backend. Busco uma oportunidade estagio para 
                aplicar meus conhecimentos.
            </p>
            
            <div className="hero-btn">
                <button className="btn-projects"> <a href="#projects">Veja meus projetos</a> </button>
                <button className="btn-cv"> <a href="/public" download="curriculo_renan.pdf" >Baixe meu curriculo</a> </button>
            </div>

            
        </div>
        
    )
}

export default Hero