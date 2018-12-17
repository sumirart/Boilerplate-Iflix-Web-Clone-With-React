import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

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
        console.log(this.props.auth)
        return (
            <Navbar color="white" light expand="md" style={{ borderBottom: '1px solid grey' }}>
                <NavbarBrand>
                    <Link to="/" className="navbar-brand" style={{ color: 'red', fontWeight: 'bold', fontSize: 20 }} >iPlix</Link>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <Form>
                            <FormGroup style={{ margin: 0 }}>
                                <Input type="search" name="search" id="exampleSearch" placeholder="Search" />
                            </FormGroup>
                        </Form>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Kategori
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink href="/categories">Lihat Semua Kategori</NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink href="/category/romance">Romance</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/category/sci-fi">Sci-Fi</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        {this.props.auth.user.length === 0 ?
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
                            :

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    {this.props.auth.user[0].username}
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <NavLink href="/logout">Logout</NavLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

const mapsStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapsStateToProps)(NavBar);