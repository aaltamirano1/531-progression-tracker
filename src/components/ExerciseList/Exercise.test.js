import React from 'react';
import {shallow, mount} from 'enzyme';
import Exercise from './Exercise';
import store from '../../store';

describe('<Exercise/>', () => {
	it('Renders without crashing', () => {
    shallow(<Exercise store={store} />);
	});
	
  it('Should fire the onAdd callback when the form is submitted', () => {
    const callback = jest.fn();
    const wrapper = mount(<Exercise select={callback} store={store} />);

    wrapper.simulate('click');
    expect(callback).toHaveBeenCalled();
  });
});