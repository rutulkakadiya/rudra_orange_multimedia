import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import Header from './Components/CommonComponents/Header'
import Footer from './Components/CommonComponents/Footer'
import CustomCursor from './Components/CommonComponents/CustomCursor'
import WhatsAppButton from './Components/CommonComponents/WhatsAppButton'
import AboutPage from './Pages/AboutPage'
import ServicePage from './Pages/ServicePage'
import PortfolioPage from './Pages/PortfolioPage'
import ContactPage from './Pages/ContactPage'
import ScrollToTop from './Components/CommonComponents/ScrollToTop'
import Fun4RajkotPage from './Pages/Fun4RajkotPage'

function App() {
  

  return (
    <>
    <div className='lato bg-(--dark-black)'>
    <Header/>
      <CustomCursor/>
      <ScrollToTop/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/fun4rajkot' element={<Fun4RajkotPage/>}/>
      <Route path='/services' element={<ServicePage/>}/>
      <Route path='/portfolio' element={<PortfolioPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
    </Routes>
    <WhatsAppButton/>
    <Footer/>
    </div>
    </>
  )
}

export default App
