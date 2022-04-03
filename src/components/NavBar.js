import React from 'react'
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap'
import logo from '../assets/img/latrosoft.png'
function NavBar() {
  return (
<div>
  <Navbar
  className='mx-5'
    expand="md"
  >
    <NavbarBrand href="/">
     <img width={150} height={50} src={logo} ></img>
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="mx-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/service">
           Service
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/technology">
           Technology
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/culture">
           Culture
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/career">
           Career
          </NavLink>
        </NavItem>
      </Nav>
     
    </Collapse>
  </Navbar>
</div>
  )
}

export default NavBar