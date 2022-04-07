import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './pages/about'
import './App.css'
import Home from './pages/home'

const App = () => {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
     </Routes>
    </div>
  )
}

export default App
