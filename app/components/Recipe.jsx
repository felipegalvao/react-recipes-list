import React, { Component } from 'react';

class Recipe extends Component {
    render() {
        var {name, thumb, headline, user, difficulty} = this.props;

        return (
            <div className="recipe-component">
                <div className="row row-recipe-main-info">
                    <div className="col-6 col-sm-6">
                        <img src={thumb}/>
                    </div>
                    <div className="col-6 col-sm-6">
                        <h2>{name}</h2>
                        <p className="recipe-headline">{headline}</p>
                        <p className="recipe-difficulty"><i className="fa fa-puzzle-piece" aria-hidden="true"></i> Difficulty: {difficulty}</p>
                        <button className="btn-see-more">See More</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-recipe-divider">
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Recipe;