import * as actions from '../actions';

const API_BASE_URL = "https://sheltered-thicket-29874.herokuapp.com";

const initialState = {
    authToken: "",
    userId: ""
};

function getUserId(username){
    fetch(`${API_BASE_URL}/users/id/${username}`)
    .then(res=>{
        if (res.ok) {
      return res.json();
    }
    throw new Error(res.statusText);
    })
    .then(user_id=>{
        localStorage.user_id = user_id;
        return user_id;
    }).catch(err=>{
        console.error(err);
    });
}

export const reducer = (state=initialState, action) => {
    if (action.type === actions.ADD_USER) {
        fetch(`${API_BASE_URL}/users`, {
            method: "POST",
            body: JSON.stringify({username: action.username, password: action.password}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res=>{
            return res.json();
        }).then(data=>{
            if(data.code){
                console.log("Problem with",data.location, "- ", data.message);
            }else{
                console.log("Success: ", data);
            }
        });
    }
    if (action.type === actions.SET_AUTH_TOKEN) {
        console.log("Set auth token fired.");
        localStorage.authToken = action.authToken;
        return Object.assign({}, state, {
            authToken: action.authToken
        });
    }
    else if (action.type === actions.ADD_EXERCISE) {
        let users = state.users.map((user, index) => {
            if (index !== action.userIndex) {
                return user;
            }
            console.log('Added exercise: ', action.name, ". ORM: ", action.orm);
            return Object.assign({}, user, {
                exercises: [...user.exercises, {
                    name: action.name,
                    orm: action.orm
                }]
            });
        });

        return Object.assign({}, state, {
            users: users
        });
    }
    return state;
};