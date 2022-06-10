import React,{useState, useEffect} from 'react';
import {Navbar, Nav,Image} from 'react-bootstrap'
import '../Navbar/navbar.css';


const NavBar = (props) => {


    return(
        <Navbar collapseOnSelect expand="lg" className="bg-navbar nb-text" variant="dark">
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/">Menú</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar