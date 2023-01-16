import React, {useState} from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,NavLink} from 'reactstrap'
import "./Main.css"
import kgplogo from './kgplogowhite.png'

function NavbarComponent(props) {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div className=''>
      <Navbar color='inherit' light expand="md" className="col-12 navtext">
        <NavbarBrand className="col-md-3 col-sm-6">Dr. Joydeep Banerjee's Lab</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className='col-md-9 text-center'>
          <NavItem className="col-md-2">
              <NavLink href="home">HOME</NavLink>             
            </NavItem>
            <NavItem className="col-md-2">
            <NavLink href="research">RESEARCH</NavLink>              
            </NavItem>            
            <NavItem className="col-md-2">
            <NavLink href="team">MEMBERS</NavLink>              
            </NavItem>
            <NavItem className="col-md-2">
            <NavLink href="contact">CAREERS & CONTACT</NavLink>              
            </NavItem>
            <NavItem className="col-md-2">
            <NavLink href="alumni">Alumni</NavLink>              
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className="my-10 row">
        <div className="h1 col-md-9 text-center ">
          <video className="embed-responsive" id="video-background" muted autoPlay loop>
          <source src={require("./stock1.mp4")} type="video/mp4" />
          <source src={require("./stock1.mp4")} type="video/ogg" />
        </video>
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