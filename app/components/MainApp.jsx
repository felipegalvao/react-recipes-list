import React, { Component } from 'react';

import api from '../api/api.jsx';
import Login from './Login.jsx';
import RecipesList from './RecipesList.jsx';

class MainApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: true,
            recipes: []
        };
    }

    componentWillMount() {
        var that = this;

        api.getRecipes().then(function (recipes) {
            var parsedRecipes = recipes.map((recipe) => {
                return {
                    ...recipe,
                    isFavorite: false
                }
            })

            that.setState({
                recipes: parsedRecipes
            });
        })
    }

    handleLogin = () => {
        this.setState({loggedIn: true});
    }

    handleFavorite = (id) => {        
        var updatedRecipes = this.state.recipes.map((recipe) => {
            if (recipe.id === id) {
                recipe.isFavorite = !recipe.isFavorite;
            }

            return recipe;
        })

        this.setState({recipes: updatedRecipes});
    }

    render() {
        var {loggedIn, recipes} = this.state;

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
                return (<RecipesList recipes={recipes} onFavorite={this.handleFavorite} />)
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