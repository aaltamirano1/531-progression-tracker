import React from 'react';
import {shallow} from 'enzyme';
import Faqs from './Faqs';

describe('<Faqs/>', () => {
	it('Renders without crashing', () => {
      shallow(<Faqs />);
	});
  it('Runs closeModal when x is clicked.', () => {
    const closeModal = jest.spyOn(Faqs.prototype, 'closeModal');
    const wrapper = shallow(<Faqs/>);

    wrapper.find('.close-modal').simulate('click');
    wrapper.update();
    expect(closeModal).toHaveBeenCalled();
  });
});