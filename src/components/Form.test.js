import React from 'react';
import {shallow, mount} from 'enzyme';

import store from '../store';
import {setFormErrors} from '../actions';
import {Form} from './Form';

describe('<Form/>', () => {
 it('Renders without crashing', () => {
    const dispatch = jest.fn();
    shallow(<Form dispatch={dispatch}/>);
  });

  it('Dispatches setFormErrors on mount.', () => {
    const dispatch = jest.fn();
    shallow(<Form dispatch={dispatch}/>);
    expect(dispatch).toHaveBeenCalledWith(setFormErrors(""));
  });

  it('Should fire the onAdd callback when the form is submitted', () => {
    const callback = jest.fn();
    const dispatch = jest.fn();
    const wrapper = mount(<Form onAdd={callback} dispatch={dispatch}/>);

    const username = "gitpull";
    const password = "password11";
    wrapper.find('input[type="text"]').instance().value = username;
    wrapper.find('input[type="password"]').instance().value = password;

    wrapper.find('form').simulate('submit');
    expect(callback).toHaveBeenCalledWith(username, password);
  });
});