import React from 'react';
import {shallow} from 'enzyme';

import {setAuthToken} from '../actions';
import {Navbar} from './Navbar';

const mockSetAuthTokenAction = {
    type: 'SET_AUTH_TOKEN'
};

jest.mock('../actions', () => Object.assign({},
    require.requireActual('../actions'),{
      setAuthToken: jest.fn().mockImplementation(() => {
            return mockSetAuthTokenAction;
      })
    }
));

const history = {location: {pathname: ""}};

describe('<Navbar/>', () => {
 it('Renders without crashing', () => {
    const dispatch = jest.fn();
    shallow(<Navbar dispatch={dispatch} history={history}/>);
  });

    it('Has a showFaqs function', () => {
      const wrapper = shallow(<Navbar history={history}/>);
      expect(wrapper.instance().showFaqs).toBeDefined();
  });

  it('Dispatches setAuthToken action when setAuthToken runs.', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<Navbar dispatch={dispatch} history={history}/>);
    dispatch.mockClear();

    const instance = wrapper.instance();
    const token = "";
    instance.setAuthToken(token);
    expect(dispatch).toHaveBeenCalledWith(mockSetAuthTokenAction);
  });
});