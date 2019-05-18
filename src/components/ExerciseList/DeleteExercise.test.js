import React from 'react';
import {shallow} from 'enzyme';

import {setSelectedExercise} from '../../actions';
import {DeleteExercise} from './DeleteExercise';

const mockSetSelectedExerciseAction = {
    type: 'SET_SELECTED_EXERCISE'
};

jest.mock('../../actions', () => Object.assign({},
    require.requireActual('../../actions'),
    {
        setSelectedExercise: jest.fn().mockImplementation(() => {
            return mockSetSelectedExerciseAction;
        })
    }
));

describe('<DeleteExercise/>', () => {
 it('Renders without crashing', () => {
    const dispatch = jest.fn();
    shallow(<DeleteExercise dispatch={dispatch} />);
  });

  it('Dispatches setSelectedExercise action when clearSelectedExercise runs.', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<DeleteExercise dispatch={dispatch}/>);
    dispatch.mockClear();

    const instance = wrapper.instance();
    instance.clearSelectedExercise();
    expect(dispatch).toHaveBeenCalledWith(mockSetSelectedExerciseAction);
  });

  it('Runs areYouSure when the delete button is first clicked.', () => {
    const areYouSure = jest.spyOn(DeleteExercise.prototype, 'areYouSure');
    const dispatch = jest.fn();
    const wrapper = shallow(<DeleteExercise dispatch={dispatch}/>);

    wrapper.find('.delete-button').simulate('click');
    wrapper.update();
    expect(areYouSure).toHaveBeenCalled();
  });
});