
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Services from './components/services/Services'
import Us from './components/us/Us'
import Contact from './components/contact/Contact'
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/us' element={<Us />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
