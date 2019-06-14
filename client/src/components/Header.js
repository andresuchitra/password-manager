import React from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import {  Link, NavLink} from 'react-router-dom'

function Header() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" activeKey={'home'}>
            <Navbar.Brand as={Link} to="/" exact>PASSWORD MANAGER</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} href="/" to="/" exact>Home</Nav.Link>
                    <Nav.Link as={NavLink} href="/add" to="/add">Add Password</Nav.Link>
                </Nav>
                <Form inline className="mr-3">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Button variant="primary">Login</Button>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header