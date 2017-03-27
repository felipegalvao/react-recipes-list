import React, { Component } from 'react';

class Login extends Component {
    handleLogin = (event) => {
        event.preventDefault();
        this.props.onLogin();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleLogin}>
                    <label for="email">Email
                        <input type="email" id="email" name="email" placeholder="Insert your email" required />
                    </label>
                    <label for="password">Password
                        <input type="password" id="password" name="password" placeholder="Insert your password" required />
                    </label>
                    <input type="submit" value="Login" />
                </form>
            </div>
        );
    }
}

export default Login;