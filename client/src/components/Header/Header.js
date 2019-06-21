import React from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap'
import {  Link, NavLink} from 'react-router-dom'
import SearchForm from '../SearchForm/SearchForm'

function Header() {
    return (
        <Navbar data-testid="header-root" bg="dark" expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Brand as={Link} to="/">PASSWORD MANAGER</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} href="/" to="/" exact={true}>Home</Nav.Link>
                    <Nav.Link as={NavLink} href="/add" to="/add">Add Password</Nav.Link>
                </Nav>
                <SearchForm></SearchForm>
                <Button variant="primary">Login</Button>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header