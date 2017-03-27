import React, { Component } from 'react';

class Login extends Component {
    handleLogin = (event) => {
        event.preventDefault();
        this.props.onLogin();
    }

    render() {
        return (
            <div className="login-component">
                <form onSubmit={this.handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Insert your email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Insert your password" required />
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