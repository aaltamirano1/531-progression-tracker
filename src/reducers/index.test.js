import {reducer} from './index';
import {
    SET_FORM_ERRORS, setFormErrors, 
    SET_AUTH_TOKEN, setAuthToken,
    SET_USER_ID, setUserId,
    SET_UNITS, setUnits,
    SET_EXERCISES, setExercises,
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

    describe('setExercises', () => {
        it('Should set the exercises in the state.', () => {
            let state = {};
            const exercises = [{name: 'Squats', orm: 150, id: 'wuhtrdvjuy'},{name: 'Deadlifts', orm: 205, id:'wuhtrdvjuz'}];
            state = reducer(state, setExercises(exercises));
            expect(state).toEqual({exercises});
        });
    });

    describe('updateExercise', () => {
        it('Should update an exercise.', () => {
            let state = {exercises: [
                {name: 'Squats', orm: 150, _id: 'wuhtrdvjuy'},
                {name: 'Deadlifts', orm: 205, _id:'wuhtrdvjuz'}
            ]};

            const reqBody = {name: 'Squats', orm: 170};
            const id = 'wuhtrdvjuy';

            state = reducer(state, updateExercise(reqBody, id));
            expect(state).toEqual({exercises: [
                {name: 'Squats', orm: 170, _id: 'wuhtrdvjuy'},
                {name: 'Deadlifts', orm: 205, _id:'wuhtrdvjuz'}
            ]});
        });
    });

    describe('setSelectedExercise', () => {
        it('Should set the selected exercise to an exercise ID.', () => {
            let state = {};
            const id = 'wuhtrdvjuy';
            state = reducer(state, setSelectedExercise(id));
            expect(state).toEqual({selectedExercise: id});
        });
    });

    describe('setNotes', () => {
        it('Should set the notes for an exercise in the state.', () => {
            let state = {exercises: [
                {name: 'Squats', orm: 150, _id: 'wuhtrdvjuy', notes: []}
            ]};

            const notes = [
                {content: 'Move your hips and knees at the same time.', _id:'wuhtrdvjuz'},
                {content: 'Push up with your traps and push your feet down through the floor.', _id:'wuhtrdvjuw'}
            ];
            const exercise_id = 'wuhtrdvjuy';


            state = reducer(state, setNotes(notes, exercise_id));
            expect(state).toEqual({exercises: [
                {name: 'Squats', orm: 150, _id: 'wuhtrdvjuy', notes: [
                    {content: 'Move your hips and knees at the same time.', id:'wuhtrdvjuz'},
                    {content: 'Push up with your traps and push your feet down through the floor.', id:'wuhtrdvjuw'}
                ]}
            ]});
        });
    });
});