import React from 'react';
import {
  Navbar, NavbarToggler, NavbarBrand
} from 'reactstrap';

const Header = () => {
  return (
    <header>
      <Navbar className="navbar-dark bg-dark box-shadow">
        <NavbarBrand className="container d-flex justify-content-between">
          <strong>Rabbit Files</strong>
        </NavbarBrand>
        <NavbarToggler />
      </Navbar>
    </header>
  );
}

export default Header;
