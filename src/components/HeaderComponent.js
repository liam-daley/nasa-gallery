import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, 
    NavItem, Button, Form, Input, FormGroup } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    handleSearch(event) {
        alert("Search: " + this.searchQuery.value);
        event.preventDefault();
    }
    
    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="ml-auto" href="/">
                            <img src="assets/images/logo.svg" alt="NASA" height="40"/>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/feature-photo">Feature Photo</NavLink>
                                </NavItem>
                                <Form className="form-inline" onSubmit={this.handleSearch}>
                                    <FormGroup className="form-group">
                                        <Input type="search" id="searchQuery" name="searchQuery"
                                            innerRef={(input) => this.searchQuery = input} />
                                    </FormGroup>
                                    <Button outline type="submit" value="submit" color="white">
                                        <span className="fa fa-search fa-lg"></span>
                                    </Button>
                                </Form>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;
