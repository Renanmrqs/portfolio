import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './pages/Footer'
import Header from './pages/Header'


function App() {
  return (
    <div>
      <Header/>
      <Footer color="blue"/>
      <Footer color="purple"/>
    </div>
  )
}

export default App
