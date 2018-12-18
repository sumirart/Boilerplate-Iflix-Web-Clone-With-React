import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

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

// import action
import { logout } from '../../public/redux/actions/auth';


class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            toHome: false,
            search: ''
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    logout = _ => {
        this.props.dispatch(logout())
            .then(() => {
                this.setState({ toHome: true });
            })
    }

    handleChange(e){
        this.setState({ search: e.target.value });
        // console.log(e.target.value)
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.search)
        this.setState({search: ''})
    }

    render() {
        if (this.state.toHome === true) {
            return <Redirect to="/" />
        }

        return (
            <Navbar color="white" light expand="md" style={{ borderBottom: '1px solid grey' }}>
                <NavbarBrand>
                    <Link to="/" className="navbar-brand" style={{ color: 'red', fontWeight: 'bold', fontSize: 20 }} >iPlix</Link>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <Form onSubmit={e => this.handleSubmit(e)}>
                            <FormGroup style={{ margin: 0 }}>
                                <Input type="text" name="search" id="exampleSearch" placeholder="Search" value={this.state.search} onChange={e => this.handleChange(e)}/>
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
                                        <NavLink onClick={() => this.logout()} >Logout</NavLink>
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

export default connect(mapsStateToProps, null)(NavBar);