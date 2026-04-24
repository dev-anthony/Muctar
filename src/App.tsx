import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Works from './components/Works'
import Footer from './components/Footer'

function App() {
  return (
    <div className='max-w-2xl mx-auto p-6 mt-6'>
      <Header />
      <Hero/>
      <About/>
      <Works/>
      <Footer/>
      
    </div>
  )
}

export default App