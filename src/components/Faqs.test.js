import React from 'react';
import {shallow} from 'enzyme';
import Faqs from './Faqs';

describe('<Faqs/>', () => {
	it('Renders without crashing', () => {
      shallow(<Faqs />);
	});
	it('Has a closeModal function', () => {
			const wrapper = shallow(<Faqs />);
			expect(wrapper.instance().closeModal).toBeDefined();
	});
});