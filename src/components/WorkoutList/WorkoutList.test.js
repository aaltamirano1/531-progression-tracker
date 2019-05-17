import React from 'react';
import {shallow} from 'enzyme';

import {setSelectedExercise, postExercise, getNotes, getExercises} from '../../actions';
import {WorkoutList} from './WorkoutList';

const mockSetSelectedExerciseAction = {
    type: 'SET_SELECTED_EXERCISE'
};

const mockPostExerciseAction = {
    type: 'POST_EXERCISE'
};

const mockGetNotesAction = {
    type: 'GET_NOTES'
};

const mockGetExercisesAction = {
    type: 'GET_EXERCISES'
};

jest.mock('../../actions', () => Object.assign({},
    require.requireActual('../../actions'),
    {
        setSelectedExercise: jest.fn().mockImplementation(() => {
            return mockSetSelectedExerciseAction;
        }),
        postExercise: jest.fn().mockImplementation(() => {
            return mockPostExerciseAction;
        }),
        getNotes: jest.fn().mockImplementation(() => {
            return mockGetNotesAction;
        }),
        getExercises: jest.fn().mockImplementation(() => {
            return mockGetExercisesAction;
        })
    }
));

describe('<WorkoutList/>', () => {
 it('Renders without crashing.', () => {
    const dispatch = jest.fn();
    shallow(<WorkoutList dispatch={dispatch} />);
  });

   it('Dispatches getExercises when component will mount.', () => {
    const dispatch = jest.fn();
    shallow(<WorkoutList dispatch={dispatch}/>);
    expect(dispatch).toHaveBeenCalledWith(mockGetExercisesAction);
  });

  it('Runs newExercise when the new-exercise button is clicked.', () => {
    const newExercise = jest.spyOn(WorkoutList.prototype, 'newExercise');
    const dispatch = jest.fn();
    const wrapper = shallow(<WorkoutList authToken={'wuhtrdvjuy'} dispatch={dispatch}/>);

    wrapper.find('button.new-exercise').simulate('click');
    wrapper.update();
    expect(newExercise).toHaveBeenCalled();
  });

  it('Dispatches post exercise action when addExercise runs.', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<WorkoutList dispatch={dispatch}/>);
    dispatch.mockClear();

    const instance = wrapper.instance();
    const name = "Deadlifts";
    const orm = 205;
    instance.addExercise(name, orm);
    expect(dispatch).toHaveBeenCalledWith(mockPostExerciseAction);
  });

  it('Dispatches setSelectedExercise and getNotes actions when selectExercise runs.', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<WorkoutList dispatch={dispatch}/>);
    dispatch.mockClear();

    const instance = wrapper.instance();
    const id = 'wuhtrdvjuy';
    instance.selectExercise(id);
    expect(dispatch).toHaveBeenCalledWith(mockSetSelectedExerciseAction);
    expect(dispatch).toHaveBeenCalledWith(mockGetNotesAction);
  });
  
});