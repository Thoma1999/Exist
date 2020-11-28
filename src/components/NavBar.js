import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import '../styles/NavBar.css';
import Brand from "../../content/assets/logo-main-white.png";
import Logo from "../../content/assets/Logo.png";
import { Squash as Hamburger } from 'hamburger-react';

const NavBar = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar expand={false}>
        <NavbarBrand href="/">
          <img src={Logo}></img>
          <img src={Brand}></img>
        </NavbarBrand>
        <div className="toggler">
        <a>Menu</a>
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={22}/>
        </div>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/about/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;