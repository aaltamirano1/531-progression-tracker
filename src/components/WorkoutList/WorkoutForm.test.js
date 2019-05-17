import React from 'react';
import {shallow, mount} from 'enzyme';
import {WorkoutForm} from './WorkoutForm';

describe('<WorkoutForm/>', () => {
 it('Renders without crashing.', () => {
    const dispatch = jest.fn();
    shallow(<WorkoutForm dispatch={dispatch}/>);
  });

  it('Runs closeModal when x is clicked.', () => {
    const closeModal = jest.spyOn(WorkoutForm.prototype, 'closeModal');
    const dispatch = jest.fn();
    const wrapper = shallow(<WorkoutForm dispatch={dispatch}/>);

    wrapper.find('.close-modal').simulate('click');
    wrapper.update();
    expect(closeModal).toHaveBeenCalled();
  });

  it('Dispatches setFormErrors on mount.', () => {
    const setInputValues = jest.spyOn(WorkoutForm.prototype, 'setInputValues');
    const dispatch = jest.fn();
    shallow(<WorkoutForm dispatch={dispatch}/>);
    expect(setInputValues).toHaveBeenCalled();
  });

  it('Fire requestHandler callback and closeModal when the form is submitted.', () => {
    const closeModal = jest.spyOn(WorkoutForm.prototype, 'closeModal');
    const callback = jest.fn();
    const dispatch = jest.fn();
    const wrapper = mount(<WorkoutForm requestHandler={callback} dispatch={dispatch}/>);

    const name = "Squats";
    const orm = 205;
    wrapper.find('input[type="text"]').instance().value = name;
    wrapper.find('input[type="number"]').instance().value = orm;

    wrapper.find('form').simulate('submit');
    expect(callback).toHaveBeenCalledWith(name, orm.toString());
    expect(closeModal).toHaveBeenCalled();
  });

 
});