
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import Home from './components/Home'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ShowResepi from './components/ShowResepi'
import NotFound from './components/NotFound'


function App() {


  return (
    <div className='container'>
      <Header/>
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/menu" element={<Menu/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/menu/:id" element={<ShowResepi/>}/>
         <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
