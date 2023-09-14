import actionTypes from "../actions/actionTypes";

const initalState = {
    counter: 0,
};
const appReducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return state;

        default:
            return state;
    }
};

export default appReducer;
