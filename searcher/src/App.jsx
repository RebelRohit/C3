import Home from './homepage/home'
import LoginCard from './login/login'
import Navigation from './navv/navbar'
import { Routes, Route } from 'react-router-dom'
import About from './homepage/About'
import Nomatch from './homepage/Nomatch'
import Appp from './Tables/TableDisplay'
import { useState } from 'react'
import ProtectedRoute from './login/Protected'



export default function App() {
  const[isLoggedIn,setIsLoggedIn]
= useState(false)
  return (
    <>
    <Navigation isLoggedIn={isLoggedIn}/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginCard setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/search" element={ 
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <Appp setIsLoggedIn={setIsLoggedIn}/>
        </ProtectedRoute>}/>
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Nomatch/>} />
          
      </Routes>
    
    </>
  )
}


