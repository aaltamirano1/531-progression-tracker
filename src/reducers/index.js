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
        })
        .then(res => {
            console.log(res);
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(resJson => {
            console.log(resJson);
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