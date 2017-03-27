import React, { Component } from 'react';
import api from '../api/api.jsx';

import Recipe from './Recipe.jsx';

class RecipesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: []
        };
    }

    componentWillMount() {
        var that = this;

        api.getRecipes().then(function (recipes) {
            that.setState({
                recipes: recipes
            });
        })
    }

    render() {
        var {recipes} = this.state;

        var renderRecipes = () => {
            return recipes.map((recipe) => {
                return <Recipe key={recipe.id} {...recipe} />
            })            
        }

        return (
            <div className="recipes-list-component">
                <div className="row">
                    <div className="col-12">
                        <h1>Recipes List</h1>
                        {renderRecipes()}
                    </div>
                </div>                
            </div>
        );
    }
}

export default RecipesList;