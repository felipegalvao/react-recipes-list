import React, { Component } from 'react';

import Login from './Login.jsx';
import RecipesList from './RecipesList.jsx';

class MainApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: true
        };
    }

    handleLogin = () => {
        this.setState({loggedIn: true});
    }

    render() {
        var {loggedIn} = this.state;

        var renderMainApp = () => {
            if (loggedIn === false) {
                return (
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">
                            <Login onLogin={this.handleLogin} />
                        </div>
                        <div className="col-4"></div>
                    </div>
                )
            } else {
                return (<RecipesList/>)
            }
        }

        return (
            <div className="grid">
                <div className="container">
                    {renderMainApp()}                 
                </div>
            </div>
        );
    }
}

export default MainApp;