import React, { Component } from 'react';

class Recipe extends Component {
    render() {
        var {name} = this.props;

        return (
            <div>
                <p>{name}</p>
            </div>
        );
    }
}

export default Recipe;