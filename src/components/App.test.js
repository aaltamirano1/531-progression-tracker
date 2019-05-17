import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../store';
import {registerUser, getAuthToken, getUserId} from '../actions';
import {App} from './App';

const app = (<Provider store={store}><App /></Provider>);

const mockRegisterUserAction = {
    type: 'REGISTER_USER'
};
const mockGetAuthTokenAction = {
    type: 'GET_AUTH_TOKEN'
};
const mockGetUserIdAction = {
    type: 'GET_USER_ID'
};

jest.mock('../actions', () => Object.assign({},
    require.requireActual('../actions'),
    {
        registerUser: jest.fn().mockImplementation(() => {
            return mockRegisterUserAction;
        }),

        getAuthToken: jest.fn().mockImplementation(() => {
            return mockGetAuthTokenAction;
        }),

        getUserId: jest.fn().mockImplementation(() => {
            return mockGetUserIdAction;
        })
    }
));

describe('<App/>', () => {
 it('Renders without crashing', () => {
      shallow(<App store={store} />);
  });

  it('Dispatches register user action when addUser runs.', () => {
  	const dispatch = jest.fn();
		const wrapper = shallow(<App store={store} dispatch={dispatch}/>);
		dispatch.mockClear();

    const instance = wrapper.instance();
    const username = "gitpull";
    const password = "password11";
    instance.addUser(username, password);
		expect(dispatch).toHaveBeenCalledWith(mockRegisterUserAction);
	});

	it('Dispatches getAuthToken and getUserId actions when getAuthToken runs.', () => {
  	const dispatch = jest.fn();
		const wrapper = shallow(<App store={store} dispatch={dispatch}/>);
		dispatch.mockClear();

    const instance = wrapper.instance();
    const username = "gitpull";
    const password = "password11";
    instance.getAuthToken(username, password);
		expect(dispatch).toHaveBeenCalledWith(mockGetAuthTokenAction);
		expect(dispatch).toHaveBeenCalledWith(mockGetUserIdAction);
	});



});