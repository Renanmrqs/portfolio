import Footer from './Footer'
import Header from './Header'
import Stack from './Stack'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import Hero from './Hero'

function App() {
  return (
    <div className='main'>
    <Header />
    <Hero />
    <About />
    <Stack />
    
    <Projects 
    repo='cinerag-frontend'
    project_name="CineRag Analytics"  
    stack={["devicon-python-plain", "devicon-fastapi-plain"]}
    />
    
    {/* <Projects 
    project_name="SentimentAI" 
    project_description="api de sentimento de filme" 
    git_link="link git" 
    project_link="link deploy"  
    stack={["python", "scikitlearn"]}
    />

    <Projects 
    project_name="ToxiBlock" 
    project_description="api de sentimento de filme" 
    git_link="link git" 
    project_link="link deploy"  
    stack={["python", "scikitlearn"]}
    />

    <Projects 
    project_name="Gym API" 
    project_description="api de sentimento de filme" 
    git_link="link git" 
    project_link="link deploy"  
    stack={["python", "scikitlearn"]}
    /> */}

    <Contact />
    <Footer />
    </div>
  )
}

export default App
