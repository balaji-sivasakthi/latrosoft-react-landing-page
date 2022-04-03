import React, { useState } from "react";
import {
  Button,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";
import logo from "../assets/img/latrosoft.png";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    
      <Navbar className="mx-5" expand="md">
        <NavbarBrand href="/">
          <img width={150} height={50} src={logo}></img>
        </NavbarBrand>
      <NavbarToggler>
      <div className="hamburger">
         <div className="line"></div>
         <div className="line"></div>
         <div className="line"></div>
       </div>
      </NavbarToggler>
        <Collapse isOpen={false} navbar className="text-center">
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/service">Service</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/technology">Technology</NavLink>
            </NavItem>
           
            <NavItem>
              <NavLink href="/culture">Culture</NavLink>
            </NavItem>
          
            <NavItem>
              <NavLink href="/blog">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/portfolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/career">Career</NavLink>
            </NavItem>
          
          </Nav>
          <NavLink style={{cursor:'pointer'}} href="/project  "  className="bg-primary text-white rounded px-3 pointer" onClick={()=>{console.log("Hello")}}>
             Start Your Project
            </NavLink>
        </Collapse>
      </Navbar>
    
  );
}

export default NavBar;
