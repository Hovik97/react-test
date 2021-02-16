import { COLLAPSE_SIDEBAR } from '../actionsTypes/collapseSidebarActionTypes';

const initialState = {
    open: true
};

export const collapseSidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case COLLAPSE_SIDEBAR: return {
            ...state,
            open: !state.open
        };
        default: return state;
    }
}