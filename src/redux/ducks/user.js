// state (intializes the variable)
const initialState = {
    user: undefined,
}

// action (calls the state)
export const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

export const getUser = () => ({
    type: GET_USER,
});
export const setUser = (user) => ({
    type: SET_USER,
    user: user,
});

// reducer (changes the state)
export default (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            const { user } = action;
            return {...state, user: user};
        default:
            return state;
        
    }
}