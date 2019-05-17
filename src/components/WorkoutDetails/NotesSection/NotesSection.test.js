import React from 'react';
import {shallow} from 'enzyme';
import NotesSection from './NotesSection';

const seedNotes = [{content: "Keep your shoulders back.", _id: 'wuhtrdvjuy'}];

describe('<NotesSection/>', () => {
	it('Renders without crashing', () => {
      shallow(<NotesSection notes={seedNotes}/>);
	});

	it('Runs newNote when + button is clicked.', () => {
    const newNote = jest.spyOn(NotesSection.prototype, 'newNote');
    const wrapper = shallow(<NotesSection notes={seedNotes}/>);

    wrapper.find('.new-note').simulate('click');
    wrapper.update();
    expect(newNote).toHaveBeenCalled();
  });

});