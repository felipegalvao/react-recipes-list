import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleLogin = event => {
    event.preventDefault();
    // Additional validation; validation already done through HTML5 input fields
    const validForm = this.validateForm(this.state.email, this.state.password);

    if (validForm) {
      this.props.onLogin();
    }
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  validateForm = (email, password) => {
    if (email === "" || email === "") {
      return false;
    } else {
      const re = /\S+@\S+\.\S+/;
      return re.test(email) === true;
    }
  };

  render() {
    return (
      <div className="login-component">
        <img src="https://www.hellofresh.com/images/hellofresh-logo.svg?v=3" />
        <h1>HelloFresh Recipes List</h1>

        <form onSubmit={this.handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              ref="email"
              name="email"
              placeholder="Insert your email"
              onChange={this.handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              ref="password"
              name="password"
              placeholder="Insert your password"
              onChange={this.handlePasswordChange}
              required
            />
          </div>
          <div className="form-group">
            <button>Log In</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
