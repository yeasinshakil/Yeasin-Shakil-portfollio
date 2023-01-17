import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/Skills/Skills'
import Qualification from './components/qualification/Qualification'
import Testimonial from './components/Testimonials/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollUp/ScrollUp'
import Work from './components/portfolio/Work'
function App() {

  return (
    <>
      <Header></Header>
      <main className='main'>
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Qualification></Qualification>
        <Work></Work>
        <Testimonial></Testimonial>
        <Contact></Contact>
      </main>
        <Footer></Footer>
        <ScrollUp></ScrollUp>
    </>
  )
}

export default App
