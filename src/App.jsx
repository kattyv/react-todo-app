import React from "react"
import { Route, Routes } from "react-router-dom"

import { Home } from './pages/Home'
import { About } from './pages/About'
import { NotFound } from './pages/NotFound'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import './styles/App.css'
import { Tasks } from "./pages/Tasks"

function App() {
  return (
    <div className="App">

      <Header />
      
      <div className="content">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/all" element={ <Tasks /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </div>

      <Footer />
    
    </div>
  )
}

export default App
