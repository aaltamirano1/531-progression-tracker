    
export const ADD_USER = 'ADD_USER';
export const addUser = (username, password) => ({
    type: ADD_USER,
    username,
    password
});

export const GET_AUTH_TOKEN = 'GET_AUTH_TOKEN';
export const getAuthToken = (username, password) => ({
    type: GET_AUTH_TOKEN,
    username,
    password
});


export const ADD_EXERCISE = 'ADD_EXERCISE';
export const addExercise = (name, orm) => ({
    type: ADD_EXERCISE,
    name,
    orm
});