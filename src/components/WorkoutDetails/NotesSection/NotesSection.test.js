import React from 'react';
import {shallow} from 'enzyme';
import NotesSection from './NotesSection';

describe('<NotesSection/>', () => {
	it('Renders without crashing.', () => {
      shallow(<NotesSection notes={[]}/>);
	});

	it('Runs newNote when + button is clicked.', () => {
    const newNote = jest.spyOn(NotesSection.prototype, 'newNote');
    const wrapper = shallow(<NotesSection notes={[]}/>);

    wrapper.find('.new-note').simulate('click');
    wrapper.update();
    expect(newNote).toHaveBeenCalled();
  });

  it('Displays message if notes.length>0.', () => {
    const wrapper = shallow(<NotesSection notes={[]}/>);
    expect(wrapper.find('#no-notes em').text()).toEqual('This exercise has no notes yet.');
  });
});