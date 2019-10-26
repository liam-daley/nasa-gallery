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
                        <NavbarBrand href="/">
                            <img src="assets/images/logo.svg" alt="NASA" height="40"/>
                        </NavbarBrand>
                        <Form className="form-inline" onSubmit={this.handleSearch}>
                            <Input type="search" id="searchQuery" name="searchQuery"
                                innerRef={(input) => this.searchQuery = input} />
                            <Button outline type="submit" value="submit" color="white">
                                <span className="fa fa-search fa-lg"></span>
                            </Button>
                        </Form>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/library">Library</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/photo-of-the-day">Photo of the Day</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;
