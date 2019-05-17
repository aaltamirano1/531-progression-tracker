import React from 'react';
import {mount} from 'enzyme';
import Notes from './Notes';

describe('<Notes/>', () => {
	it('Renders without crashing.', () => {
      mount(<Notes />);
	});
});