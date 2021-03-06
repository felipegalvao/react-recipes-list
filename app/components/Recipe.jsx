import React, { Component } from "react";

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
  };

  render() {
    const {
      id,
      name,
      thumb,
      headline,
      user,
      difficulty,
      description,
      ingredients,
      calories,
      carbos,
      fats,
      fibers,
      proteins,
      rating,
      ratings,
      isFavorite,
      favorites
    } = this.props;
    const { moreInfoVisible } = this.state;

    // Render the list of ingredients
    const renderIngredients = () => {
      let ingredientsCounter = 0;
      return ingredients.map(ingredient => {
        return <li key={ingredientsCounter++}>{ingredient}</li>;
      });
    };

    // Render one filled star for each rating (rounded to the nearest integer), filling the rest with empty stars
    const renderCurrentRating = () => {
      let listItems = [];
      let i = 0;
      for (i; i < Math.round(rating); i++) {
        listItems.push(<i className="fa fa-star" aria-hidden="true" key={i} />);
      }
      for (i; i < 5; i++) {
        listItems.push(
          <i className="fa fa-star-o" aria-hidden="true" key={i} />
        );
      }

      return (
        <div title={"Rating: " + rating}>
          {listItems}
        </div>
      );
    };

    // Here will be all the information shown when the user clicks the See More element
    const renderMoreInfo = () => {
      if (moreInfoVisible === true) {
        return (
          <div className="show-more-info-container">
            <div className="row">
              <div className="col-6 col-sm-6 col-current-rating text-center">
                <p>Rating ({ratings === null ? 0 : ratings})</p>
                {renderCurrentRating()}
              </div>
              <div className="col-6 col-sm-6 col-give-your-rating text-center">
                <p>Give Your Rating</p>
                <div>
                  <fieldset className="rating">
                    <input type="radio" id="star5" name="rating" value="5" />
                    <label
                      onClick={() => this.props.onSetRating(id, 5)}
                      id="label-star5"
                      className="full"
                      htmlFor="star5"
                      title="Awesome - 5 stars"
                    />

                    <input type="radio" id="star4" name="rating" value="4" />
                    <label
                      onClick={() => this.props.onSetRating(id, 4)}
                      id="label-star4"
                      className="full"
                      htmlFor="star4"
                      title="Pretty good - 4 stars"
                    />

                    <input type="radio" id="star3" name="rating" value="3" />
                    <label
                      onClick={() => this.props.onSetRating(id, 3)}
                      id="label-star3"
                      className="full"
                      htmlFor="star3"
                      title="Meh - 3 stars"
                    />

                    <input type="radio" id="star2" name="rating" value="2" />
                    <label
                      onClick={() => this.props.onSetRating(id, 2)}
                      id="label-star2"
                      className="full"
                      htmlFor="star2"
                      title="Kinda bad - 2 stars"
                    />

                    <input type="radio" id="star1" name="rating" value="1" />
                    <label
                      onClick={() => this.props.onSetRating(id, 1)}
                      id="label-star1"
                      className="full"
                      htmlFor="star1"
                      title="Terrible - 1 star"
                    />
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
              <div className="col-6 col-sm-6 col-ingredients-list">
                <p>Ingredients</p>
                <ul>
                  {renderIngredients()}
                </ul>
              </div>
              <div className="col-6 col-sm-6 col-nutritional-info">
                <p>Nutritional Table</p>
                <table>
                  <tbody>
                    <tr>
                      <td>Calories</td>
                      <td>{calories === "" ? "N/A" : calories}</td>
                    </tr>
                    <tr>
                      <td>Carbos</td>
                      <td>{carbos === "" ? "N/A" : carbos}</td>
                    </tr>
                    <tr>
                      <td>Fats</td>
                      <td>{fats === "" ? "N/A" : fats}</td>
                    </tr>
                    <tr>
                      <td>Fibers</td>
                      <td>{fibers === "" ? "N/A" : fibers}</td>
                    </tr>
                    <tr>
                      <td>Proteins</td>
                      <td>{proteins === "" ? "N/A" : proteins}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12">
                {renderSeeMoreElement()}
              </div>
            </div>
          </div>
        );
      }
    };

    // This function will render the See More or See Less element, based on the current state of the component
    const renderSeeMoreElement = () => {
      return (
        <p className="p-see-more" onClick={this.handleShowHideMoreInfo}>
          See
          {" "}
          {moreInfoVisible ? "Less" : "More"}
          {" "}
          <i
            className={`fa fa-caret-${moreInfoVisible ? "up" : "down"}`}
            aria-hidden="true"
          />
        </p>
      );
    };

    return (
      <div className="recipe-component">
        <div className="row row-recipe-main-info">
          <div className="col-6 col-sm-12">
            <img src={thumb} />
          </div>
          <div className="col-6 col-sm-12">
            <div className="row row-recipe-name-favorite">
              <div className="col-11 col-sm-11">
                <h2>{name}</h2>
              </div>
              <div className="col-1 col-sm-1">
                <i
                  className={`fa ${this.props.isFavorite ? "fa-heart icon-unfavorite-recipe" : "fa-heart-o icon-favorite-recipe"}`}
                  onClick={() => this.props.onFavorite(id)}
                  aria-hidden="true"
                />
              </div>
            </div>

            <p className="recipe-headline">{headline}</p>
            <p className="recipe-user">By {user.name} ({user.email})</p>
            <p className="recipe-difficulty">
              <i className="fa fa-signal" aria-hidden="true" />
              {" "}
              Difficulty:
              {" "}
              {difficulty}
            </p>
            <p className="recipe-favorites">
              <i className="fa fa-heart" aria-hidden="true" />
              {favorites}
              {" "}
              {favorites === 1 ? "favorite" : "favorites"}
              {" "}
            </p>
            {renderSeeMoreElement()}
          </div>
        </div>
        {renderMoreInfo()}
        <div className="row">
          <div className="col-12 col-sm-12 col-recipe-divider">
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
