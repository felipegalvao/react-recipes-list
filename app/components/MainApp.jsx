import React, { Component } from 'react';

import api from '../api/api.jsx';
import Login from './Login.jsx';
import RecipesList from './RecipesList.jsx';

class MainApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            recipes: [],
            apiErrorMessage: null
        };
    }

    componentWillMount() {
        // Get the Recipes from the JSON file and save them in the state
        var that = this;

        api.getRecipes().then(function (recipes) {
            var parsedRecipes = recipes.map((recipe) => {
                return {
                    ...recipe,
                    isFavorite: false,
                    userRating: null
                }
            })

            that.setState({
                recipes: parsedRecipes
            });
        }).catch(function (error) {
            that.setState({
                apiErrorMessage: "An error has occured"
            })
        })
    }

    handleLogin = () => {
        this.setState({loggedIn: true});
    }

    handleFavorite = (id) => {        
        var updatedRecipes = this.state.recipes.map((recipe) => {
            if (recipe.id === id) {
                if (recipe.isFavorite === false) {
                    recipe.favorites = recipe.favorites + 1;
                } else {
                    recipe.favorites = recipe.favorites - 1;
                }
                recipe.isFavorite = !recipe.isFavorite;
            }
            return recipe;
        })

        this.setState({recipes: updatedRecipes});
    }

    handleSetRating = (id, rating) => {
        var updatedRecipes = this.state.recipes.map((recipe) => {
            if (recipe.id === id) {
                // If user never voted, increase the number of ratings
                if (recipe.userRating === null) {
                    recipe.rating = ((recipe.rating * recipe.ratings) + rating)/(recipe.ratings + 1);
                    recipe.ratings = recipe.ratings + 1;
                // If user already voted and is now changing its vote
                } else {
                    recipe.rating = ((recipe.rating * recipe.ratings) - recipe.userRating + rating)/(recipe.ratings);                    
                }              
                recipe.userRating = rating;                
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
                return (<RecipesList recipes={recipes} onFavorite={this.handleFavorite} onSetRating={this.handleSetRating} />)
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