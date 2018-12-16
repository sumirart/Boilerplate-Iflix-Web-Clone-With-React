import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Form, FormGroup, Input
} from 'reactstrap';


class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Navbar color="light" light expand="md">
                {/* <div className="navbar-brand">
                    <Link to="/" className="navbar-brand">
                        <img src="http://i63.tinypic.com/oid9xu.png" height="50px" alt="Logo Santren Koding" />
                    </Link>
                    <Link to="/" className="navbar-brand">Santren Koding</Link>
                </div> */}

                <NavbarBrand>
                    <Link to="/" className="navbar-brand" style={{ color: 'red', fontWeight: 'bold' }} >iplix</Link>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <Form>
                            <FormGroup style={{ margin: 0 }}>
                                <Input type="search" name="search" id="exampleSearch" placeholder="search" />
                            </FormGroup>
                        </Form>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Categories
                </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink href="/categories">See All Categories</NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink href="/?categories=romance">Romance</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/?categories=sci-fi">Sci-Fi</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Account
                </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink href="/login">Login</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/register">Register</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavBar;