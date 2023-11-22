import React, {useState} from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,NavLink} from 'reactstrap'
import "./Main.css"

function NavbarComponent(props) {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
      <Navbar light expand="md" className="col-12 navtext" style={{zIndex: 1}}>
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
            <NavItem className="col-md-3">
            <NavLink href="contact">CAREERS & CONTACT</NavLink>              
            </NavItem>
            <NavItem className="col-md-2">
            <NavLink href="alumni">Alumni</NavLink>              
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  )
}

export default NavbarComponent