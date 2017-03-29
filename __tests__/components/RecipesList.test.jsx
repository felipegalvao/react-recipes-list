import React from 'react';
import chai from 'chai';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import RecipesList from '../../app/components/RecipesList.jsx';

var expect = chai.expect;

describe('RecipesList', () => {
    it('should render a Recipe component for each recipe passed to it', () => {
        var recipes = [{
            id: 0,
            name: 'Pasta'
        },
        {
            id: 1,
            name: 'Rice'
        },
        {
            id: 2,
            name: 'Beef'
        }];
        var recipesList = shallow(<RecipesList recipes={recipes} />)
        expect(recipesList.find('Recipe').length).to.equal(3);
    })

    it('should render a paragraph with "There are no recipes to show" if no recipe is passed to it', () => {
        var recipes = [];
        var recipesList = shallow(<RecipesList recipes={recipes} />)
        expect(recipesList.find('p').first().text()).to.equal("There are no recipes to show");
    })
})