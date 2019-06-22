import React from 'react'
import {Navbar, Nav, Button, NavItem} from 'react-bootstrap'
import {  Link, NavLink} from 'react-router-dom'
import SearchForm from '../SearchForm/SearchForm'

function Header() {
    return (
        <Navbar data-testid="header-root" bg="dark" expand="lg" variant="dark">
            <Navbar.Brand as={Link} to="/">PASSWORD MANAGER</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} href="/" to="/" exact={true}>Home</Nav.Link>
                    <Nav.Link as={NavLink} href="/add" to="/add">Add Password</Nav.Link>
                </Nav>
                <NavItem className="my-1">
                    <SearchForm></SearchForm>
                </NavItem>
                <NavItem className="my-1">
                    <Button variant="primary">Login</Button>
                </NavItem>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header