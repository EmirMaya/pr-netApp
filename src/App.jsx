
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Services from './components/services/Services'
import Us from './components/us/Us'
import Contact from './components/contact/Contact'

function App() {

  return (
    <>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/us' element={<Us />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
