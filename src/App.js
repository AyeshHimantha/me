import React from 'react';
import "./App.css";
import Header from "./Components/header/Header";
import Home from './Components/home/Home';
import About from './Components/about/About';
import Skills from './Components/skills/Skills';
import Services from './Components/services/Services';
import Qualification from './Components/qualification/Qualification';
import Testimonial from './Components/testimonials/Testimonial';
import Work from './Components/work/Work';
import Contacts from './Components/contacts/Contacts';

const App = () => {
  return (
    <div>
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
        <Work/>
        <Contacts/>
      </main>
    </div>
  )
}

export default App
