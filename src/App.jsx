import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/Skills/Skills'
function App() {

  return (
    <>
      <Header></Header>
      <main className='main'>
        <Home></Home>
        <About></About>
        <Skills></Skills>
      </main>
    </>
  )
}

export default App
