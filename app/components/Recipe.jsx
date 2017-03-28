import React, { Component } from 'react';

class Recipe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            moreInfoVisible: false
        };
    }

    handleShowHideMoreInfo = () => {
        this.setState({
            moreInfoVisible: !this.state.moreInfoVisible
        });
    }

    render() {
        var {name, thumb, headline, user, difficulty, description, ingredients} = this.props;
        var {moreInfoVisible} = this.state;

        var renderIngredients = () => {
            return ingredients.map((ingredient) => {
                return (<li>{ingredient}</li>);
            })
        }

        var renderMoreInfo = () => {
            if (moreInfoVisible === true) {
                return (
                    <div>
                        <div className="row">                            
                            <div className="col-6 col-sm-6 col-rating text-center">
                                <p>Current Rating</p>
                                <p>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                </p>
                            </div>
                            <div className="col-6 col-sm-6 col-rating text-center">
                                <p>Give Your Rating</p>
                                <p>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-12">
                                <p className="p-recipe-description">{description}</p>                            
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-12">
                                <ul>
                                    {renderIngredients()}
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
        }

        var renderSeeMoreElement = () => {
            if (moreInfoVisible === true) {
                return (
                    <p className="p-see-more" onClick={this.handleShowHideMoreInfo}>See Less <i className="fa fa-caret-up" aria-hidden="true"></i></p>
                )
            } else {
                return (
                    <p className="p-see-more" onClick={this.handleShowHideMoreInfo}>See More <i className="fa fa-caret-down" aria-hidden="true"></i></p>
                )
            }
        }

        return (
            <div className="recipe-component">
                <div className="row row-recipe-main-info">
                    <div className="col-6 col-sm-12">
                        <img src={thumb}/>
                    </div>                    
                    <div className="col-6 col-sm-12">
                        <h2>{name} <i className="fa fa-heart-o" aria-hidden="true"></i></h2>
                        <p className="recipe-headline">{headline}</p>
                        <p className="recipe-difficulty"><i className="fa fa-puzzle-piece" aria-hidden="true"></i> Difficulty: {difficulty}</p>
                        {renderSeeMoreElement()}
                    </div>
                </div>
                {renderMoreInfo()}
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