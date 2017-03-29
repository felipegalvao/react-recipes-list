import React from 'react';
import chai from 'chai';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import Recipe from '../../app/components/Recipe.jsx';

var expect = chai.expect;

describe('Recipe', () => {
    let user;
    let ingredients;
    let id;

    beforeEach(() => {
        user = {
            name: "Felipe",
            email: "felipe@felipe.com"
        };

        ingredients = [
            'salt',
            'pepper'
        ]

        id = 'abc123';
    })
    
    it('should not render show-more-info-container initially', () => {
        var recipe = shallow(<Recipe user={user} />);
        expect(recipe.find('.show-more-info-container').length).to.equal(0);
    })

    it('should render show-more-info-container if p-see-more is clicked', () => {
        var recipe = shallow(<Recipe user={user} ingredients={ingredients} />);
        recipe.find('.p-see-more').first().simulate('click');
        expect(recipe.find('.show-more-info-container').length).to.equal(1);
    })

    it('should hide show-more-info-container if p-see-more is clicked twice', () => {
        var recipe = shallow(<Recipe user={user} ingredients={ingredients} />);
        recipe.find('.p-see-more').first().simulate('click');
        recipe.find('.p-see-more').first().simulate('click');
        expect(recipe.find('.show-more-info-container').length).to.equal(0);
    })

    it('should call onFavorite prop with id when Favorite heart icon is clicked', () => {
        const spy = sinon.spy();
        var recipe = shallow(<Recipe user={user} ingredients={ingredients} id={id} onFavorite={spy} />);
        recipe.find('.icon-favorite-recipe').first().simulate('click');

        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith(id)).to.be.true;
    })

    it('should call onSetRating with id and rating selected when Star icon is clicked', () => {
        const spy = sinon.spy();
        var recipe = shallow(<Recipe user={user} ingredients={ingredients} id={id} onSetRating={spy} />);
        recipe.find('.p-see-more').first().simulate('click');
        recipe.find('#label-star4').first().simulate('click');

        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith(id, 4)).to.be.true;
    })
})