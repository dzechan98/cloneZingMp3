import actionTypes from "../actions/actionTypes";

const initalState = {
    banner: [],
};
const appReducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return {
                ...state,
                banner:
                    action.homeData?.find(
                        (item) => item.sectionType === "banner"
                    ).items || [],
            };
        case actionTypes.GET_BANNERS:
            return state;

        default:
            return state;
    }
};

export default appReducer;
