const API_BASE_URL = "https://sheltered-thicket-29874.herokuapp.com";

export const registerUser = (username, password) => dispatch =>{
  fetch(`${API_BASE_URL}/users`, {
      method: "POST",
      body: JSON.stringify({username: username, password: password}),
      headers: {
          'Content-Type': 'application/json'
      }
  }).then(res=>{
      return res.json();
  }).then(data=>{
      if(data.code){
          dispatch(setFormErrors(`Problem with ${data.location}. ${data.message}.`));
      }else{
          console.log("Success: ", data);
      }
  });
}

export const SET_FORM_ERRORS = 'SET_FORM_ERRORS';
export const setFormErrors = (formErrors) => ({
    type: SET_FORM_ERRORS,
    formErrors
});

export const getAuthToken = (username, password) => dispatch =>{
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

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = (authToken) => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const getUserId = username => dispatch =>{
	fetch(`${API_BASE_URL}/users/id/${username}`)
	.then(res=>{
		if (res.ok) {
      return res.json();
    }
    throw new Error(res.statusText);
	})
	.then(userId=>{
		dispatch(setUserId(userId));
		dispatch(getExercises(userId));
	}).catch(err=>{
		console.error(err);
	});
}

export const SET_USER_ID = 'SET_USER_ID';
export const setUserId = (userId) => ({
    type: SET_USER_ID,
    userId
});

export const getExercises = userId => dispatch =>{
	fetch(`${API_BASE_URL}/exercises/by-user/${userId}`, {
		headers: {
			"Authorization": "Bearer "+localStorage.authToken
		}
	})
	.then(res=>{
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.statusText);
	}).then(resJson=>{
		dispatch(setExercises(resJson));
	}).catch(err=>{
		console.error(err);
	});

}

export const SET_EXERCISES = 'SET_EXERCISES';
export const setExercises = exercises => ({
    type: SET_EXERCISES,
    exercises
});

export const postExercise = (name, orm) => dispatch =>{
	fetch(`${API_BASE_URL}/exercises`, {
		method: "POST",
		body: JSON.stringify({name, orm}),
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer '+localStorage.authToken
		}
	})
	.then(res=> {
		if(res.ok){
			return res.json;
		}
		throw new Error(res.statusText);
	})
	.then(data=>{
		console.log(data);
		dispatch(addExercise(name, orm));
		// close modal, re-render workout-list
	})
	.catch(err=>{
		console.log(err);
	});
}

export const ADD_EXERCISE = 'ADD_EXERCISE';
export const addExercise = (name, orm) => ({
    type: ADD_EXERCISE,
    name,
    orm
});

export const putExercise = (name, orm, id) => dispatch =>{
	fetch(`${API_BASE_URL}/exercises/${id}`, {
		method: "PUT",
		body: JSON.stringify({name, orm}),
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer '+localStorage.authToken
		}
	})
	.then(res=>res.json())
	.then(data=>{
		dispatch(updateExercise(name, orm, id));
	})
	.catch(err=>{
		console.error(err);
	});
}

export const UPDATE_EXERCISE = 'UPDATE_EXERCISE';
export const updateExercise = (name, orm, id) => ({
    type: UPDATE_EXERCISE,
    name,
    orm,
    id
});

export const SET_SELECTED_EXERCISE = 'SET_SELECTED_EXERCISE';
export const setSelectedExercise = id => ({
    type: SET_SELECTED_EXERCISE,
   	id
});