import React, {useState} from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,NavLink, Button, NavbarText } from 'reactstrap'
import "./Main.css"
import kgplogo from './kgplogowhite.png'

function NavbarComponent(props) {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div className='Screen'>
      <Navbar color='inherit' dark expand="md" className="col-12">
        <NavbarBrand className="col-md-3 col-sm-6">Dr. Joydeep Banerjee's Lab</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className='col-md-9 text-center'>
          <NavItem className="col-md-2">
              <NavLink href="home" style={{color:"white"}}>Home</NavLink>             
            </NavItem>
            <NavItem className="col-md-2">
            <NavLink href="research" style={{color:"white"}}>Research</NavLink>              
            </NavItem>            
            <NavItem className="col-md-2">
            <NavLink href="team" style={{color:"white"}}>Members</NavLink>              
            </NavItem>
            <NavItem className="col-md-2">
            <NavLink href="contact" style={{color:"white"}}>Contact Us</NavLink>              
            </NavItem>
            <NavItem className="col-md-2">
            <NavLink href="careers" style={{color:"white"}}>Careers</NavLink>              
            </NavItem>
            <NavItem className="col-md-2">
            <NavLink href="alumni" style={{color:"white"}}>Alumni</NavLink>              
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className="my-10 row">
      <div className="h1 col-md-9 text-center">
      {/*<video className="embed-responsive" id="video-background" muted autoPlay loop>
          <source src={require("./pexels-marian-croitoru-6042317.mp4")} type="video/mp4" />
          <source src={require("./pexels-marian-croitoru-6042317.mp4")} type="video/ogg" />
  </video>*/}
        <p className="h1">Laboratory of Plant Molecular Biology & Transgenics</p>
        <p className="h1">Department of Agricultural and Food Engineering</p>
        <p className="h2">Indian Institute of Technology Kharagpur, West Bengal, India </p>
      </div>
      <img src={kgplogo} className="img-fluid col-md-3 float-right d-none d-md-block" alt="iitkgp logo"/>     
    </div>
    </div>
  )
}

export default NavbarComponent