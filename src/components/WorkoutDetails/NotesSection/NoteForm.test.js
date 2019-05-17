import React from 'react';
import {shallow, mount} from 'enzyme';
import {NoteForm} from './NoteForm';
import {postNote} from '../../../actions';

const mockPostNoteAction = {
    type: 'POST_NOTE'
};

jest.mock('../../../actions', () => Object.assign({},
  require.requireActual('../../../actions'),{
    postNote: jest.fn().mockImplementation(() => {
      return mockPostNoteAction;
    })
  }
));

describe('<NoteForm/>', () => {
 it('Renders without crashing.', () => {
    const dispatch = jest.fn();
    shallow(<NoteForm dispatch={dispatch} />);
  });

  it('Runs closeModal when x is clicked.', () => {
    const closeModal = jest.spyOn(NoteForm.prototype, 'closeModal');
    const dispatch = jest.fn();
    const wrapper = shallow(<NoteForm dispatch={dispatch}/>);

    wrapper.find('.close-modal').simulate('click');
    wrapper.update();
    expect(closeModal).toHaveBeenCalled();
  });

  it('Dispatches postNote and runs closeModal when the form is submitted.', () => {
    const closeModal = jest.spyOn(NoteForm.prototype, 'closeModal');
    const dispatch = jest.fn();
    const wrapper = mount(<NoteForm dispatch={dispatch} selected={'wuhtrdvjuy'}/>);

    const note = "Push up with your traps and push your feet down through the floor.";
    wrapper.find('textarea').instance().value = note;

    wrapper.find('form').simulate('submit');
    wrapper.update();
    expect(dispatch).toHaveBeenCalledWith(postNote(note, 'wuhtrdvjuy'));
    expect(closeModal).toHaveBeenCalled();
  });
});