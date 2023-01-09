import React from 'react'
import Homepage from './components/Homepage'
import Learning from './components/Learnt/Learning'
import Journey from './components/Journey/Journey'
import Footer from './components/Footer/Footer'
import Experience from './components/Experience/Experience'

export default function App() {
  return (
    <>
   
    <div >
      <Homepage/>
      <Journey />
      <Learning/>
      <Experience />
      <Footer />
    </div>
    </>
  )
}
