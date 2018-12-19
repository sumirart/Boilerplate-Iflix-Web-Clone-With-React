import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router';
// import { connect } from 'react-redux';

// import action
import { logout } from '../../public/redux/actions/auth';

// import Header from './NavBar/Index';
import Logo from './NavBar/Logo';
import Navigation from './NavBar/Navigation';
import Search from './NavBar/Search';
import UserProfile from './NavBar/UserProfile';

class NavBar extends Component {
    constructor(props) {
        super(props);

        // this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            toHome: false,
            search: '',
            toSearch: false,
        };
    }

    // toggle() {
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     });
    // }


    render() {
        if (this.state.toHome === true) {
            return <Redirect to="/" />
        }
        if (this.state.toSearch === true) {
            // const route = '/movies?search=' + this.state.search;
            return <Redirect to={`/movies?search=` + this.state.search} />
        }

        return (
             <header className="Header" style={{ marginBottom: 100 }}>
                <Logo />
                <Navigation />
                {/* <Search onSubmit={e => this.handleSubmit(e)} /> */}
                <Search/>
                <UserProfile />
            </header>
        );
    }
}

// const mapsStateToProps = (state) => ({
//     auth: state.auth
// })

export default NavBar;
// export default connect(mapsStateToProps, null)(NavBar);