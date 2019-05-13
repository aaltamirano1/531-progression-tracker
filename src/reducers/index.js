import * as actions from '../actions';

const initialState = {
    authToken: localStorage.authToken,
    formErrors: "",
    userId: "",
    units: "lbs."
};

export const reducer = (state=initialState, action) => {
    if (action.type === actions.SET_FORM_ERRORS){
        return Object.assign({}, state, {
            formErrors: action.formErrors
        });
    } else if (action.type === actions.SET_AUTH_TOKEN) {
        localStorage.authToken = action.authToken;
        return Object.assign({}, state, {
            authToken: action.authToken
        });
    } else if (action.type === actions.SET_USER_ID) {
        localStorage.userId = action.userId;
        return Object.assign({}, state, {
            userId: action.userId
        });
    }else if (action.type === actions.SET_UNITS) {
        return Object.assign({}, state, {
            units: action.units
        });
    } else if (action.type === actions.SET_EXERCISES) {
        return Object.assign({}, state, {
            exercises: action.exercises
        });
    } else if (action.type === actions.ADD_EXERCISE) {
        return Object.assign({}, state, {
            exercises: [...state.exercises, {name: action.name, orm: action.orm, week: 1}]
        });
    } else if (action.type === actions.UPDATE_EXERCISE){
        const exercises = state.exercises.map(exercise => exercise._id === action.id ?
            { ...exercise, name: action.name, orm: action.orm } : 
            exercise
        );
        return Object.assign({}, state, {
            exercises 
        });
    } else if (action.type === actions.SET_SELECTED_EXERCISE) {
        return Object.assign({}, state, {
            selectedExercise: action.id
        });
    } 
    return state;
};