import PropTypes from "prop-types"
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
 FormGroup,
 Input
} from 'reactstrap';
import logo from '../../content/assets/logo-main-white.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
  const [search,setSearch] = useState(false)

  const submitSearch = (e) =>{
      e.preventDefault();
      alert("Searched");
  }

  const openSearch = () =>{
    setSearch(true);
  }

  const searchClass = search ?'searchBox active': 'searchBox'; 
  return (
    <div>
      <div className="hero">
      <Navbar id="pageNav" dark expand={true} color="black">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
          <form onSubmit={submitSearch}>
          <FormGroup id="searchForm" className="ml-auto" >
            <Input
              type="search"
              name="search"
              className={searchClass}
              placeholder="search"
            />
            <img className="searchIcon" src={require('../../content/assets/search.png')} alt="Search" onClick={openSearch}/>
          </FormGroup>
          </form>
      </Navbar>
        <div className="content">
          <img src={logo}></img>
          <h2>Find the interesting in existing,
            the extraodinary from ordinary.
          </h2>
        </div>
      </div>
      <Navbar id="catNav" light expand="md">
        <NavbarToggler id="hamburger" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="m-auto" navbar>
            <NavItem>
              <NavLink href="/">Politics</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Culture</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Travel</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Technology</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">Business</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Health</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header