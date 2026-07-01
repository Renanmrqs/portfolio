import Footer from './Footer'
import Header from './Header'
import Stack from './Stack'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import about_date from './data/jouney'
import stack_date_back from './data/stack'

function App() {
  return (
    <div className='main'>
    <Header />
    <Hero />
    
    <About 
    about={about_date}
    />
    
    <Stack 
    front={["devicon-javascript-plain"]}
    back={stack_date_back}
    tec={["devicon-git-plain", "devicon-github-original"]}
    />
    
    <Projects 
    repo='cinerag-frontend'
    project_name="CineRag Analytics"  
    project_link="https://cinerag-analytics.vercel.app/home.html"  
    stack={["devicon-javascript-plain", "devicon-css3-plain", "devicon-html5-plain", "devicon-fastapi-plain"]}
    />
    
    <Projects 
    project_name="SentimentAI" 
    repo="SentimentAI"
    project_link="https://renanmrqs-sentimentai-app-j7ouwz.streamlit.app/"  
    stack={["devicon-python-plain", "devicon-streamlit-plain", "devicon-scikitlearn-plain", "devicon-pandas-plain", "devicon-fastapi-plain", ""]}
    />

    <Projects 
    project_name="ToxiBlock" 
    repo="ToxiBlock"
    project_link="https://chromewebstore.google.com/detail/toxiblock/gbdijbaipjncfbjecgpfbbadhnibchha?utm_source=item-share-cb"  
    stack={["devicon-javascript-plain", "devicon-fastapi-plain"]}
    />

    <Projects 
    project_name="Gym API" 
    repo="Gym-Api"
    project_link="https://gym-api-08pc.onrender.com/docs#/"  
    stack={["devicon-python-plain", "devicon-postgresql-plain", "devicon-sqlalchemy-plain", "devicon-fastapi-plain"]}
    />

    <Contact />
    <Footer />
    </div>
  )
}

export default App
