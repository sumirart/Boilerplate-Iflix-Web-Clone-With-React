import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import "../style.css";

// Register form
import RegisterForm from '../components/registerForm';

// import action
import { register } from '../../public/redux/actions/auth';

class Register extends Component {
  state = {
    toHome: false
  }

  handleSubmit = value => {
    this.props.dispatch(register(value))
      .then(() => {
        this.setState({ toHome: true });
      })
      .catch(err => {
        alert(err.response.data.messages);
        console.log(err.response);
      });
  }

  render() {
    if (this.state.toHome === true) {
      return <Redirect to="/" />
    }

    return (
      <div className="container">
        <div className="form">
          <div style={{ width: "30%" }}>
            <RegisterForm onSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Register);