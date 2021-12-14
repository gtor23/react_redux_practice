// create a reducer
//reducer takes in 2 parameters: initial state and action
const reducer = (state = 0, action) => {
    //use a switch statement with reducers
    switch (action.type) {
        case 'deposit':
            return state + action.payload;
        case 'withdraw':
            return state - action.payload;
        default:     //set a default in case there isn't a deposit or withdraw
            return state 
    }
};

export default reducer;