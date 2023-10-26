import React from 'react'
import NavProvider from './contexts/NavContext'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Vote from './pages/CastVote'
import Contact from './pages/Contact'

const MainClient = () => {
  return (
    <div>
       <NavProvider>
        <Header />
        <Home />
        <Vote />
        <About />
        <Contact />
      </NavProvider>
    </div>
  )
}

export default MainClient
