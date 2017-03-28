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
        var {id, name, thumb, headline, user, difficulty, description, ingredients, calories, carbos, 
             fats, fibers, proteins, rating, ratings, isFavorite} = this.props;
        var {moreInfoVisible} = this.state;

        // This function render the list of ingredients
        var renderIngredients = () => {
            var ingredientsCounter = 0;
            return ingredients.map((ingredient) => {
                return (<li key={ingredientsCounter++}>{ingredient}</li>);
            })
        }

        var renderCurrentRating = () => {
            var listItems = [];
            var i = 0;
            for (i; i < Math.round(rating); i++) {
                listItems.push(<i className="fa fa-star" aria-hidden="true"></i>)
            }
            for (i; i < 5; i++) {
                listItems.push(<i className="fa fa-star-o" aria-hidden="true"></i>)
            }

            return (
                <div>                    
                    {listItems}
                </div>
            )            
        }

        var renderFavorite = () => {
            if (isFavorite === false || isFavorite === undefined) {
                return (<i className="fa fa-heart-o" onClick={() => this.props.onFavorite(id)} aria-hidden="true"></i>);
            } else {
                return (<i className="fa fa-heart" onClick={() => this.props.onFavorite(id)} aria-hidden="true"></i>);
            }
            
        }

        // Here will be all the information shown when the user clicks the See More element
        var renderMoreInfo = () => {
            if (moreInfoVisible === true) {
                return (
                    <div>
                        <div className="row">                            
                            <div className="col-6 col-sm-6 col-current-rating text-center">
                                <p>Rating ({ratings === null ? 0 : ratings})</p>
                                {renderCurrentRating()}
                            </div>
                            <div className="col-6 col-sm-6 col-give-your-rating text-center">
                                <p>Give Your Rating</p>
                                <div>
                                    <fieldset className="rating">
                                        <input type="radio" id="star5" name="rating" value="5" /><label className = "full" htmlFor="star5" title="Awesome - 5 stars"></label>                                        
                                        <input type="radio" id="star4" name="rating" value="4" /><label className = "full" htmlFor="star4" title="Pretty good - 4 stars"></label>                                        
                                        <input type="radio" id="star3" name="rating" value="3" /><label className = "full" htmlFor="star3" title="Meh - 3 stars"></label>                                        
                                        <input type="radio" id="star2" name="rating" value="2" /><label className = "full" htmlFor="star2" title="Kinda bad - 2 stars"></label>                                        
                                        <input type="radio" id="star1" name="rating" value="1" /><label className = "full" htmlFor="star1" title="Terrible - 1 star"></label>                                        
                                    </fieldset>                                    
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-12">
                                <p className="p-recipe-description">{description}</p>                            
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 col-sm-6">
                                <ul>
                                    {renderIngredients()}
                                </ul>
                            </div>
                            <div className="col-6 col-sm-6">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Calories</td>
                                            <td>{calories}</td>
                                        </tr>
                                        <tr>
                                            <td>Carbos</td>
                                            <td>{carbos}</td>
                                        </tr>
                                        <tr>
                                            <td>Fats</td>
                                            <td>{fats}</td>
                                        </tr>
                                        <tr>
                                            <td>Fibers</td>
                                            <td>{fibers}</td>
                                        </tr>
                                        <tr>
                                            <td>Proteins</td>
                                            <td>{proteins}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )
            }
        }

        // This function will render the See More or See Less element, based on the current state of the component
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
                        <div className="row row-recipe-name-favorite">
                            <div className="col-11 col-sm-11">
                                <h2>{name}</h2>
                            </div>
                            <div className="col-1 col-sm-1">
                                {renderFavorite()}
                            </div>
                        </div>
                        
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