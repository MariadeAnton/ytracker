import React, { Component } from 'react';
import { Register } from '../components/auth';

class RegisterUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      password2: '',
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { firstname, lastname, email, password, password2 } = this.state;
    const onChange = this.onChange;

    return (
      <Register {...{firstname, lastname, email, password, password2, onChange }} />
    );
  }
}

export default RegisterUser;
