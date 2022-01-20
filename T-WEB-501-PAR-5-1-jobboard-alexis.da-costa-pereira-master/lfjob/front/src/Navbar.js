import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import { NavDropdown } from 'react-bootstrap';


class Navbar extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar_">
                    
                <ReactBootStrap.Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
                <ReactBootStrap.Navbar.Brand href="/">LFJob</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                        
                        <ReactBootStrap.Nav.Link href="employeur">Pour les employeurs</ReactBootStrap.Nav.Link>
                        
                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Nav>
                    
                        <ReactBootStrap.Nav.Link href="seconnecter">Se connecter</ReactBootStrap.Nav.Link>
                        <NavDropdown title="Créer un Compte" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/creationcomptepro">Professionnel</NavDropdown.Item>
                            <NavDropdown.Item href="/creationcomptepar">Particulier</NavDropdown.Item>
                        </NavDropdown>
    
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
            </nav>
            </header>
            
        )
    }
}

export default Navbar;