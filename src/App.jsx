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
    project_name="CineRagAnalytics" 
    project_description="aplicativo de cinema de filmer" 
    git_link="link git" 
    project_link="link deploy"  
    stack={["js", "fastapi"]}
    />
    <Projects 
    project_name="SentimentAI" 
    project_description="api de sentimento de filme" 
    git_link="link git" 
    project_link="link deploy"  
    stack={["python", "scikitlearn"]}
    />
    <Contact />
    <Footer />
    </div>
  )
}

export default App
