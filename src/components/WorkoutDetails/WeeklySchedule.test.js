import React from 'react';
import {shallow} from 'enzyme';

import {putExercise} from '../../actions';
import {WeeklySchedule} from './WeeklySchedule';

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

describe('<WeeklySchedule/>', () => {
  it('Renders without crashing', () => {
    shallow(<WeeklySchedule />);
  });

  it('Dispatches putExercise action when updateWeek runs.', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<WeeklySchedule dispatch={dispatch}/>);
    dispatch.mockClear();

    const instance = wrapper.instance();
    instance.updateWeek(3);
    expect(dispatch).toHaveBeenCalledWith(mockPutExerciseAction);
  });

  it('Runs updateWeek when different table rows are clicked.', () => {
    const updateWeek = jest.spyOn(WeeklySchedule.prototype, 'updateWeek');
    const dispatch = jest.fn();
    const wrapper = shallow(<WeeklySchedule dispatch={dispatch}/>);

    wrapper.find('tr').at(2).simulate('click');
    wrapper.update();
    expect(updateWeek).toHaveBeenCalledWith(2);

    wrapper.find('tr').at(4).simulate('click');
    wrapper.update();
    expect(updateWeek).toHaveBeenCalledWith(4);

    wrapper.find('tr').at(1).simulate('click');
    wrapper.update();
    expect(updateWeek).toHaveBeenCalledWith(1);
  });

  
});