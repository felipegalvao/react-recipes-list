import React from 'react';
import chai from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import Login from '../../app/components/Login.jsx';

const expect = chai.expect;

describe("Login", () => {
    it('should render an image, a h1 title and a form', () => {
        const login = shallow(<Login/>);
        expect(login.find('img').length).to.equal(1);
        expect(login.find('h1').length).to.equal(1);
        expect(login.find('form').length).to.equal(1);
    })

    it('should call onLogin prop when complete form is submitted', () => {
        const spy = sinon.spy();
        const login = shallow(<Login onLogin={spy}/>);
        login.find('#email').first().simulate('change', {target: {value: 'felipe@galvao.com'} });
        login.find('#password').first().simulate('change', {target: {value: 'abcdef'} });
        login.find('form').simulate('submit', { preventDefault(){} });

        expect(spy.calledOnce).to.be.true;
    })

    it('should not call onLogin prop when incomplete form is submitted', () => {
        const spy = sinon.spy();
        const login = shallow(<Login onLogin={spy}/>);
        login.find('#email').first().simulate('change', {target: {value: 'felipe@galvao.com'} });
        login.find('form').simulate('submit', { preventDefault() {} });

        expect(spy.calledOnce).to.be.false;
    })

    it('should not call onLogin prop when invalid email is submitted', () => {
        const spy = sinon.spy();
        const login = shallow(<Login onLogin={spy}/>);
        login.find('#email').first().simulate('change', {target: {value: 'felipe'} });
        login.find('#password').first().simulate('change', {target: {value: 'abcdef'} });
        login.find('form').simulate('submit', { preventDefault() {} });

        expect(spy.calledOnce).to.be.false;
    })
})
