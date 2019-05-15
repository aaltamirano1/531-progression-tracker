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
        dispatch(setAuthToken(username, password));
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
	  dispatch(setFormErrors(`Incorrect username or password.`));
	});
}

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = (authToken) => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const getUserId = username => dispatch =>{
	fetch(`${API_BASE_URL}/users/id-and-units/${username}`)
	.then(res=>{
		if (res.ok) {
      return res.json();
    }
    throw new Error(res.statusText);
	})
	.then(user=>{
		dispatch(setUserId(user.id));
		dispatch(getExercises(user.id));
		dispatch(setUnits(user.units));
	}).catch(err=>{

		console.error(err);
	});
}

export const SET_USER_ID = 'SET_USER_ID';
export const setUserId = userId => ({
    type: SET_USER_ID,
    userId
});

export const putUserUnits = (id, units) => dispatch =>{
	console.log(`${API_BASE_URL}/users/${id}/units`);
	fetch(`${API_BASE_URL}/users/${id}/units`, {
		method: "PUT",
		body: JSON.stringify({units}),
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer '+localStorage.authToken
		}
	})
	.then(res=> {
		if(res.ok){
			return res.json();
		}
		throw new Error(res.statusText);
	})
	.then(data=>{
		dispatch(setUnits(data.units));
	})
	.catch(err=>{
		console.log(err);
	});
}

export const SET_UNITS = 'SET_UNITS';
export const setUnits = units => ({
    type: SET_UNITS,
    units
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
		dispatch(getExercises(localStorage.userId));
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

export const putExercise = (reqBody, id) => dispatch =>{
	fetch(`${API_BASE_URL}/exercises/${id}`, {
		method: "PUT",
		body: JSON.stringify(reqBody),
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer '+localStorage.authToken
		}
	})
	.then(res=>res.json())
	.then(data=>{
		dispatch(updateExercise(reqBody, id));
	})
	.catch(err=>{
		console.error(err);
	});
}

export const UPDATE_EXERCISE = 'UPDATE_EXERCISE';
export const updateExercise = (reqBody, id) => ({
    type: UPDATE_EXERCISE,
    reqBody,
    id
});

export const deleteExercise = (id) => dispatch =>{
	fetch(`${API_BASE_URL}/exercises/${id}`, {
		method: "DELETE",
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer '+localStorage.authToken
		}
	}).then(res=>{
		const message = res.json.message ? ": "+res.json.message : "";
		console.log(`${res.status}${message}`);
		dispatch(getExercises(localStorage.userId));
	}).catch(err=>{
		console.error(err);
	});
}

export const SET_SELECTED_EXERCISE = 'SET_SELECTED_EXERCISE';
export const setSelectedExercise = id => ({
    type: SET_SELECTED_EXERCISE,
   	id
});

export const getNotes = exerciseId => dispatch =>{
	console.log("getNotes() ran.")
	fetch(`${API_BASE_URL}/notes/by-exercise/${exerciseId}`, {
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
		dispatch(setNotes(resJson, exerciseId));
	}).catch(err=>{
		console.error(err);
	});
}

export const SET_NOTES = 'SET_NOTES';
export const setNotes = (notes, exercise_id) => ({
    type: SET_NOTES,
    notes,
    exercise_id
});

export const postNote = (content, exercise_id) => dispatch =>{
	fetch(`${API_BASE_URL}/notes`, {
		method: "POST",
		body: JSON.stringify({content, exercise_id}),
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
		dispatch(getNotes(exercise_id));
	})
	.catch(err=>{
		console.log(err);
	});
}

export const deleteNote = (id, exercise_id) => dispatch =>{
	console.log("delete note ran.")
	fetch(`${API_BASE_URL}/notes/${id}`, {
		method: "DELETE",
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer '+localStorage.authToken
		}
	}).then(res=>{
		dispatch(getNotes(exercise_id));
	}).catch(err=>{
		console.error(err);
	});
}