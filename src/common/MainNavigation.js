import React from 'react'
import NavBar from 'react-bootstrap/Navbar';

export default class MainNavigation extends React.Component {
    render(){
     return <NavBar bg="dark" expand="lg">
         <NavBar.Brand href = "#home">Marvel Champions Tracker</NavBar.Brand>
     </NavBar>   
    }
}

