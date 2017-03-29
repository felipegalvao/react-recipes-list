import React, { Component } from 'react';

import Recipe from './Recipe.jsx';

class RecipesList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var {recipes} = this.props;

        var renderRecipes = () => {
            return recipes.map((recipe) => {
                return <Recipe key={recipe.id} {...recipe} onFavorite={this.props.onFavorite} onSetRating={this.props.onSetRating} />
            })            
        }

        return (
            <div className="recipes-list-component">
                <div className="row">
                    <div className="col-sm-hide col-2"></div>
                    <div className="col-sm-12 col-8">
                        <h1>Recipes List</h1>
                        {renderRecipes()}
                    </div>
                    <div className="col-sm-hide col-2"></div>
                </div>                
            </div>
        );
    }
}

export default RecipesList;