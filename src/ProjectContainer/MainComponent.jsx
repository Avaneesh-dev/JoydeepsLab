import React from 'react'
import TextLine from './TextLine'
import NavbarComponent from './NavbarComponent'
import HomeComponent from './HomeComponent'
import ResearchComponent from './ResearchComponent'
import TeamComponent from './TeamComponent'
import AlumniComponent from './AlumniComponent'
import ContactComponent from './ContactComponent'
import Footer from './FooterComponent'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
function MainComponent() {
  return (
    <BrowserRouter>
    <TextLine />
      <NavbarComponent />
      <Routes>
        <Route index element={<HomeComponent />} />
        <Route exact path="/home" element={<HomeComponent />} />
        <Route exact path="/research" element={<ResearchComponent />} />
        <Route exact path="/contact" element={<ContactComponent />} />
        <Route exact path="/team" element={<TeamComponent />} />
        <Route exact path="/alumni" element={<AlumniComponent />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default MainComponent