import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import "../style.css";

// Login form
import LoginForm from '../components/loginForm';

// import action
import { login } from '../../public/redux/actions/auth';

class Login extends Component {
  state = {
    toHome: false
  }

  handleSubmit = value => {
    this.props.dispatch(login(value))
      .then(() => {
        this.setState({ toHome: true });
      })
      .catch(err => alert('Username or password wrong!'));
  }

  render() {
    if (this.state.toHome === true) {
      return <Redirect to="/" />
    }

    return (
      <div className="container">
        <div className="form">
          <div style={{ width: "30%" }}>
            <LoginForm onSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Login);