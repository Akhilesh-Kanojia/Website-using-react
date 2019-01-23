import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Login.css';

export default class CustomeNavbar extends Component{
   logout() {
      localStorage.clear();
      window.location.href = '/';
   }
    render() {
      const { location } = this.props;
        return (
           <Navbar default collapseOnSelect>
             <Navbar.Header>
              <Navbar.Brand>
               <Link to="/about">CodeLife</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
             </Navbar.Header>
             <Navbar.Collapse>
                <Nav pullRight>
                   <NavItem eventKey={1} componentClass={Link} href="/home" to="/home">
                      Home
                   </NavItem>
                   <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
                      About
                   </NavItem>
                   <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
                      News
                   </NavItem>
                   <NavItem eventKey={4} componentClass={Link} href="/" to="/">
                   {location.pathname !== '/' && <button className="btn btn-primary log-btn" onClick={() => this.logout()}>Logout</button>}
                   </NavItem>
                </Nav>
             </Navbar.Collapse>
           </Navbar>
        )
    }
}