import React from 'react';
import {shallow} from 'enzyme';

import {putNote, deleteNote, getNotes} from '../../../actions';
import {Note} from './Note';

const mockPutNoteAction = {
    type: 'PUT_NOTE'
};

const mockDeleteNoteAction = {
    type: 'DELETE_NOTE'
};

const mockGetNotesAction = {
    type: 'GET_NOTES'
};

jest.mock('../../../actions', () => Object.assign({},
    require.requireActual('../../../actions'),{
      putNote: jest.fn().mockImplementation(() => {
          return mockPutNoteAction;
      }),

      deleteNote: jest.fn().mockImplementation(() => {
          return mockDeleteNoteAction;
      }),

      getNotes: jest.fn().mockImplementation(() => {
          return mockGetNotesAction;
      })
    }
));

describe('<Note/>', () => {
  it('Renders without crashing.', () => {
    const dispatch = jest.fn();
    shallow(<Note />);
  });

  it('Toggles editing property when Edit Note button is clicked.', () => {
    const toggleEditing = jest.spyOn(Note.prototype, 'toggleEditing');
    const dispatch = jest.fn();
    const wrapper = shallow(<Note units={"lbs."}/>);

    expect(wrapper.state('editing')).toBe(false);
    expect(wrapper.find('p')).toBeTruthy;
    expect(wrapper.find('#edit-note-button')).toBeTruthy;
    expect(wrapper.find('#delete-note-button')).toBeTruthy;
    expect(wrapper.find('form')).toBeTruthy;

    wrapper.find('#edit-note-button').simulate('click');
    wrapper.update();
    expect(wrapper.state('editing')).toBe(true);
    expect(wrapper.find('form')).toBeTruthy;
  });

  it('Dispatches deleteNote when the Delete Note button is first clicked.', () => {
    const dispatch = jest.fn();
    const exerciseId = 'wuhtrdvjuy';
    const noteId = 'wuhtrdvjuz';
    const wrapper = shallow(<Note dispatch={dispatch} exercise={exerciseId} noteId={noteId}/>);

    wrapper.find('#delete-note-button').simulate('click');
    wrapper.update();
    expect(dispatch).toHaveBeenCalledWith(deleteNote(noteId, exerciseId));
  });

});