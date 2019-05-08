import * as actions from '../actions';

const initialState = {
    formErrors: "",
    userId: "",
    exercises: [{name: "squats", orm: 145, week: 1}, {name: "deadlifts", orm: 185, week: 2}]
};

export const reducer = (state=initialState, action) => {
    if (action.type === actions.SET_USER_ID) {
        localStorage.userId = action.userId;
        return Object.assign({}, state, {
            userId: action.userId
        });
    } else if (action.type === actions.SET_EXERCISES) {
        return Object.assign({}, state, {
            exercises: action.exercises
        });
    }else if (action.type === actions.SET_SELECTED_WORKOUT) {
        return Object.assign({}, state, {
            selectedWorkout: action.selectedWorkout
        });
    } else if (action.type === actions.SET_AUTH_TOKEN) {
        localStorage.authToken = action.authToken;
        return Object.assign({}, state, {
            authToken: action.authToken
        });
    } else if (action.type === actions.SET_FORM_ERRORS){
        return Object.assign({}, state, {
            formErrors: action.formErrors
        });
    } else if (action.type === actions.ADD_EXERCISE) {
        return Object.assign({}, state, {
            exercises: [...state.exercises, {name: action.name, orm: action.orm, week: 1}]
        });
    }
    return state;
};