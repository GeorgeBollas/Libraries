import {
    LAYOUT_LEFT_NAVIGATOR_TOGGLE,
    LAYOUT_RIGHT_NAVIGATOR_TOGGLE
} from '../actions/Shell';


const initialState = {
    leftNavigatorOpen: true,
    rightNavigatorOpen: true,
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === LAYOUT_LEFT_NAVIGATOR_TOGGLE) {
        return { ...state, leftNavigatorOpen: !state.leftNavigatorOpen };
    }

    if (action.type === LAYOUT_RIGHT_NAVIGATOR_TOGGLE) {
        return { ...state, rightNavigatorOpen: !state.rightNavigatorOpen };
    }

    return state;
};
