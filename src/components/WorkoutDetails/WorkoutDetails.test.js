import React from 'react';
import {shallow} from 'enzyme';

import {putExercise} from '../../actions';
import {WorkoutDetails} from './WorkoutDetails';

const mockPutExerciseAction = {
    type: 'PUT_EXERCISE'
};

jest.mock('../../actions', () => Object.assign({},
    require.requireActual('../../actions'),
    {
        putExercise: jest.fn().mockImplementation(() => {
            return mockPutExerciseAction;
        })
    }
));

describe('<WorkoutDetails/>', () => {
  it('Renders without crashing', () => {
    shallow(<WorkoutDetails />);
  });

  it('Dispatches putExercise action when updateExercise runs.', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<WorkoutDetails dispatch={dispatch}/>);
    dispatch.mockClear();

    const instance = wrapper.instance();
    const name = "Squats";
    const orm = 205;
    const id = 'wuhtrdvjuy';
    instance.updateExercise({name, orm}, id);
    expect(dispatch).toHaveBeenCalledWith(mockPutExerciseAction);
  });

  
});