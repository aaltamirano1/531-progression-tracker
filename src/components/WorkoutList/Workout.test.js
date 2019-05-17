import React from 'react';
import {shallow, mount} from 'enzyme';
import Workout from './Workout';
import store from '../../store';

describe('<Workout/>', () => {
	it('Renders without crashing', () => {
    shallow(<Workout store={store} />);
	});
	
  it('Should fire the onAdd callback when the form is submitted', () => {
    const callback = jest.fn();
    const wrapper = mount(<Workout select={callback} store={store} />);

    wrapper.simulate('click');
    expect(callback).toHaveBeenCalled();
  });
});