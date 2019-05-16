import {
	SET_FORM_ERRORS, setFormErrors, 
	SET_AUTH_TOKEN, setAuthToken,
	SET_USER_ID, setUserId,
	SET_UNITS, setUnits,
	SET_EXERCISES, setExercises,
	UPDATE_EXERCISE, updateExercise,
	SET_SELECTED_EXERCISE, setSelectedExercise,
	SET_NOTES, setNotes
} from './index';

describe('setFormErrors', () => {
    it('Should return the action', () => {
        const formErrors = 'Incorrect username or password.';
        const action = setFormErrors(formErrors);
        expect(action.type).toEqual(SET_FORM_ERRORS);
        expect(action.formErrors).toEqual(formErrors);
    });
});

describe('setAuthToken', () => {
    it('Should return the action', () => {
        const authToken = 'wuhtrdvjuy';
        const action = setAuthToken(authToken);
        expect(action.type).toEqual(SET_AUTH_TOKEN);
        expect(action.authToken).toEqual(authToken);
    });
});

describe('setUserId', () => {
    it('Should return the action', () => {
        const userId = 'wuhtrdvjuy';
        const action = setUserId(userId);
        expect(action.type).toEqual(SET_USER_ID);
        expect(action.userId).toEqual(userId);
    });
});

describe('setUnits', () => {
    it('Should return the action', () => {
        const units = 'kg.';
        const action = setUnits(units);
        expect(action.type).toEqual(SET_UNITS);
        expect(action.units).toEqual(units);
    });
});

describe('setExercises', () => {
    it('Should return the action', () => {
        const exercises = [];
        const action = setExercises(exercises);
        expect(action.type).toEqual(SET_EXERCISES);
        expect(action.exercises).toEqual(exercises);
    });
});

describe('updateExercise', () => {
    it('Should return the action', () => {
        const id = 'wuhtrdvjuy';
        const reqBody = {name: "Squats", orm: 200};
        const action = updateExercise(reqBody, id);
        expect(action.type).toEqual(UPDATE_EXERCISE);
        expect(action.id).toEqual(id);
        expect(action.reqBody.name).toEqual(reqBody.name);
        expect(action.reqBody.orm).toEqual(reqBody.orm);
    });
});

describe('setSelectedExercise', () => {
    it('Should return the action', () => {
        const id = 'wuhtrdvjuy';
        const action = setSelectedExercise(id);
        expect(action.type).toEqual(SET_SELECTED_EXERCISE);
        expect(action.id).toEqual(id);
    });
});

describe('setNotes', () => {
    it('Should return the action', () => {
        const notes = [];
        const exercise_id = 'wuhtrdvjuy';
        const action = setNotes(notes, exercise_id);
        expect(action.type).toEqual(SET_NOTES);
        expect(action.notes).toEqual(notes);
        expect(action.exercise_id).toEqual(exercise_id);
    });
});
