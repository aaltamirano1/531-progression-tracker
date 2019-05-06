const API_BASE_URL = "https://sheltered-thicket-29874.herokuapp.com";
    
export const ADD_USER = 'ADD_USER';
export const addUser = (username, password) => ({
    type: ADD_USER,
    username,
    password
});

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = (authToken) => ({
    type: SET_AUTH_TOKEN,
    authToken
});


export const ADD_EXERCISE = 'ADD_EXERCISE';
export const addExercise = (name, orm) => ({
    type: ADD_EXERCISE,
    name,
    orm
});

export const getAuthToken=(username, password)=>dispatch=>{
	fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify({username: username, password: password}),
    headers: {
        'Content-Type': 'application/json'
    }
	})
	.then(res=> res.json())
	.then(data=>{     
	    dispatch(setAuthToken(data.authToken));
	})
	.catch(err=>{
	    console.error(err);
	});
}