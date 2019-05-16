import {reducer} from './index';
import {
    SET_FORM_ERRORS, setFormErrors, 
    SET_AUTH_TOKEN, setAuthToken,
    SET_USER_ID, setUserId,
    SET_UNITS, setUnits,
    SET_EXERCISES, setExercises,
    ADD_EXERCISE, addExercise,
    UPDATE_EXERCISE, updateExercise,
    SET_SELECTED_EXERCISE, setSelectedExercise,
    SET_NOTES, setNotes
} from '../actions';

describe('reducer', () => {
    // Set up some dummy data


    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            authToken: localStorage.authToken,
            formErrors: "",
            userId: localStorage.userId,
            units: "lbs."
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('setFormErrors', () => {
        it('Should set form errors.', () => {
            let state = {};
            const formErrors = 'Incorrect username or password.';
            state = reducer(state, setFormErrors(formErrors));
            expect(state).toEqual({formErrors});
        });
    });

    describe('setAuthToken', () => {
        it('Should set an auth token.', () => {
            let state = {};
            const authToken = 'wuhtrdvjuy';
            state = reducer(state, setAuthToken(authToken));
            expect(state).toEqual({authToken});
        });
    });

    describe('setUserId', () => {
        it('Should set a user ID.', () => {
            let state = {};
            const userId = 'wuhtrdvjuy';
            state = reducer(state, setUserId(userId));
            expect(state).toEqual({userId});
        });
    });

    describe('setUnits', () => {
        it('Should set a unit of measurement.', () => {
            let state = {};
            const units = 'kg.';
            state = reducer(state, setUnits(units));
            expect(state).toEqual({units});
        });
    });

});