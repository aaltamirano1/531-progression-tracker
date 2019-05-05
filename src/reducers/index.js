import * as actions from '../actions';

const API_BASE_URL = "https://sheltered-thicket-29874.herokuapp.com";

const initialState = {
    users: []
};

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
                console.log("Error: ", data.message);
            }else{
                console.log("Success: ", data);
            }
        });
    }
    if (action.type === actions.GET_AUTH_TOKEN) {
        fetch(`${API_BASE_URL}/auth/login`, {
            method: "POST",
            body: JSON.stringify({username: action.username, password: action.password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res=> res.json())
        .then(data=>{
            return Object.assign({}, state, {
                authToken: data.authToken
            });            
            //getUserId(_user); 
        })
        .catch(err=>{
            console.error(err);
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