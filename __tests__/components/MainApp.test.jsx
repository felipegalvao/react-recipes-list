import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import MainApp from '../../app/components/MainApp.jsx';

var expect = chai.expect;

describe('MainApp', () => {
    it('should render the login page initially', () => {
        var mainApp = shallow(<MainApp />);
        expect(mainApp.find('Login').length).to.equal(1);
    });

    it('should render Recipes List if user is logged in', () => {
        var mainApp = shallow(<MainApp/>);
        mainApp.setState({loggedIn: true});
        expect(mainApp.find('RecipesList').length).to.equal(1);
    })
});