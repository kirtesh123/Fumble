// state (intializes the variable)
const initialState = {
    choice: "",
}

// action (calls the state)
const CHOICE = "choice";

export const handleChoice = (value) => ({
    type: CHOICE,
    val: value,
});

// reducer (changes the state)
export default (state = initialState, action) => {
    switch(action.type) {
        case CHOICE:
            return {...state, choice: action.val};
        default:
            return "";
        
    }
}