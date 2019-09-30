import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, 
    NavItem, Button, Form, Input, FormGroup } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
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
            <Navbar dark bg-danger expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="ml-auto" href="/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" alt="NASA" />
                        <h1>NASA Image Gallery</h1>
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
                                <NavLink className="nav-link" to="/photo-of-the-day">Photo of the Day</NavLink>
                            </NavItem>
                            <NavItem>
                                <Form class="form-inline" onSubmit={this.handleSearch}>
                                    <FormGroup className="form-group">
                                        <Input type="text" id="searchQuery" name="searchQuery"
                                            innerRef={(input) => this.searchQuery = input} />
                                    </FormGroup>
                                    <Button outline type="submit" value="submit" color="white">
                                        <span className="fa fa-search fa-lg"></span>
                                    </Button>
                                </Form>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}

export default Header;
