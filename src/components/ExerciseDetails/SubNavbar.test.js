import React from 'react';
import {shallow} from 'enzyme';

import {putUserUnits, setSelectedExercise} from '../../actions';
import {SubNavbar} from './SubNavbar';

const mockPutUserUnitsAction = {
    type: 'PUT_USER_UNITS'
};

const mockSetSelectedExerciseAction = {
    type: 'SET_SELECTED_EXERCISE'
};

jest.mock('../../actions', () => Object.assign({},
    require.requireActual('../../actions'),{
      putUserUnits: jest.fn().mockImplementation(() => {
          return mockPutUserUnitsAction;
      }),
      setSelectedExercise: jest.fn().mockImplementation(() => {
          return mockSetSelectedExerciseAction;
      })
    }
));

describe('<SubNavbar/>', () => {
  it('Renders without crashing.', () => {
    const dispatch = jest.fn();
    shallow(<SubNavbar />);
  });

  it('Clears selected exerise when Back to All link is clicked.', () => {
    const clearSelectedExercise = jest.spyOn(SubNavbar.prototype, 'clearSelectedExercise');
    const dispatch = jest.fn();
    const wrapper = shallow(<SubNavbar dispatch={dispatch}/>);

    wrapper.find('#all-exercises-link').simulate('click');
    wrapper.update();
    expect(clearSelectedExercise).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(mockSetSelectedExerciseAction);
  });

  it('Toggles units when Units link is clicked.', () => {
    const updateUnits = jest.spyOn(SubNavbar.prototype, 'updateUnits');
    const dispatch = jest.fn();
    const wrapper = shallow(<SubNavbar dispatch={dispatch} units={"lbs."}/>);

    wrapper.find('#toggle-units-link').simulate('click');
    wrapper.update();
    expect(updateUnits).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(mockPutUserUnitsAction);
  });

  it('Runs editExercise when Edit link is clicked.', () => {
    const editExercise = jest.spyOn(SubNavbar.prototype, 'editExercise');
    const dispatch = jest.fn();
    const wrapper = shallow(<SubNavbar />);

    wrapper.find('#edit-exercise-link').simulate('click');
    expect(editExercise).toHaveBeenCalled();
  });
});