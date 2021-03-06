import * as actions from '../actions';

const initialState = {
    authToken: localStorage.authToken,
    formErrors: "",
    userId: localStorage.userId,
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
    } else if (action.type === actions.UPDATE_EXERCISE){
        let exercises = {};
        if(action.reqBody.name && action.reqBody.orm){
            exercises = state.exercises.map(exercise => exercise._id === action.id ?
                { ...exercise, name: action.reqBody.name, orm: action.reqBody.orm } : 
                exercise
            );
        }else if(action.reqBody.week){
            exercises = state.exercises.map(exercise => exercise._id === action.id ?
                { ...exercise, week: action.reqBody.week } : 
                exercise
            );
        }
        return Object.assign({}, state, {
            exercises 
        });
    } else if (action.type === actions.SET_SELECTED_EXERCISE) {
        return Object.assign({}, state, {
            selectedExercise: action.id
        });
    } else if (action.type === actions.SET_NOTES) {  
        const notes = action.notes.map(note=>{ return {content: note.content, id: note._id}});

        const exercises = state.exercises.map(exercise => exercise._id === action.exercise_id ?
            { ...exercise, notes: notes} : 
            exercise
        ); 
        return Object.assign({}, state, {
            exercises 
        });
    }
    return state;
};