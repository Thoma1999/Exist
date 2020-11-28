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
import Logo from "../../content/assets/Logo.png"
import Burger from 'react-css-burger';

const NavBar = (props) => {
  const [isActive, setIsActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    setIsActive(!isActive);
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
        <Burger
          onClick={toggle}
          active={isActive}
          burger="collapse"
          color="white"
          hoverOpacity={0.8}
          scale={0.75}
        />
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