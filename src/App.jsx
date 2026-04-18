import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Chapter from './pages/Chapter'
import Footer from './components/Footer'

function App() {
  return (
    <Router basename="/prompt">
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chapter/:id" element={<Chapter />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
