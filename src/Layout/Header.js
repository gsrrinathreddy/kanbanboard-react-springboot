import React, { Component } from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './Header.scss'

export default class Header extends Component {
  render() {
    return (
        <Navbar bg="primary" variant="dark" className="">
            <Navbar.Brand className="nav-brand">Navbar</Navbar.Brand>
            <Nav className=" mr-auto ">
               
                    <Nav.Link > 
                         <NavLink to="/dashboard" className="nav-link">Dashboard  </NavLink> 
                    </Nav.Link>
               
            </Nav>
            <Nav className="ml-auto left-content">                
                     <Nav.Link > 
                        <NavLink to="/login" className="nav-link">Login </NavLink>
                     </Nav.Link>
                     <Nav.Link > 
                         <NavLink to="/signup" className="nav-link">SignUp</NavLink>
                     </Nav.Link>              
            </Nav>
            
           
        </Navbar>
    )
  }
}
