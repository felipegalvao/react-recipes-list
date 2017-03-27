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
        var {name, thumb, headline, user, difficulty, description} = this.props;
        var {moreInfoVisible} = this.state;

        var renderMoreInfo = () => {
            if (moreInfoVisible === true) {
                return (
                    <div className="row">
                        <div className="col-12 col-sm-12">
                            <p>{description}</p>
                        </div>
                    </div>
                )
            }
        }

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
                        <button className="btn-see-more" onClick={this.handleShowHideMoreInfo}>See More</button>
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