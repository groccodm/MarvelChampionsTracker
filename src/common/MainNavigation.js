import React from 'react'
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class MainNavigation extends React.Component {
    render(){
     return <NavBar bg="light" expand="lg">
         <NavBar.Brand href = "#home">Marvel Champions Tracker</NavBar.Brand>
         <NavBar.Toggle aria-controls="basic-navbar-nav"/>
         <NavBar.Collapse id="basic-navbar-nav">
             <Nav className="mr-auto">
                 <Nav.Link href = "/">Home</Nav.Link>
                 <Nav.Link href = "/help">Help</Nav.Link>
                 <Nav.Link href = "/about">About This Project</Nav.Link>             
            </Nav>
         </NavBar.Collapse>
     </NavBar>   
    }
}

