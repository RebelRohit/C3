import Home from './homepage/home'
import LoginCard from './login/login'
import SearchForm from './searchbar/search'

import Navigation from './nav/navbar'
import { Routes, Route } from 'react-router-dom'
import About from './homepage/About'
import Nomatch from './homepage/Nomatch'



export default function App() {


  return (
    <>
    <Navigation/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginCard />} />
        <Route path="/search" element={<SearchForm />} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Nomatch/>} />
          
      </Routes>
    
    </>
  )
}


