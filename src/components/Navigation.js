import React from 'react'
import {Navbar, NavDropdown, Nav, Container, Form, FormControl, Button, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Navigation = () => {
  return (
  
    <div>
      
     <Navbar bg="dark" variant="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Ratesturant</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
         <Nav.Link as={Link} to ={"/"}>Home</Nav.Link>
         <Nav.Link as={Link} to ={"/new"}>New arrival</Nav.Link>
         <Nav.Link as={Link} to ={"/create"}>Create</Nav.Link>
         
         <Nav.Link as={Link} to ={"/login"}>Login</Nav.Link>
         
        <NavDropdown title="Profile" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Settings</NavDropdown.Item>
         
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Logout
          </NavDropdown.Item>
        </NavDropdown>
        
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </div>
    
    
  )
}

export default Navigation
