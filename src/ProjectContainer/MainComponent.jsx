import React from 'react'
import NavbarComponent from './NavbarComponent'
import HomeComponent from './HomeComponent'
import ResearchComponent from './ResearchComponent'
import TeamComponent from './TeamComponent'
import ContactComponent from './ContactComponent'
import Footer from './FooterComponent'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
function MainComponent() {
  return (
    <BrowserRouter>
      <NavbarComponent/>
        <Routes>
                <Route index element={<HomeComponent />} />
                <Route exact path="/home" element={<HomeComponent />} />
                <Route exact path="/research" element={<ResearchComponent />} />
                <Route exact path="/contact" element={<ContactComponent />} />
                <Route exact path="/team" element={<TeamComponent />} />           
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default MainComponent