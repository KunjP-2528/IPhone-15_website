
import './App.css'
import NavBar from './components/NavBar'
import Highlight from './components/Highlight'
import Hero from './components/Hero'
import Model from './components/Model'
import Features from './components/Features'

import * as Sentry from '@sentry/react';
import Chip from './components/Chip'
import Footer from './components/Footer'

function App() {
 

  return (
   <main className='bg-black'>
   <NavBar/>
    <Hero/>
    <Highlight/>
    <Model/>
    <Features/>
    <Chip/>
    <Footer/>
   </main>

  )
}

export default Sentry.withProfiler(App);
