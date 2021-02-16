import { SET_TEXT } from '../actionsTypes/headerActionTypes';

const initialState = {
    text: ''
}

export const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEXT: return {
            ...state,
            text: action.payload
        };
        default: return state;
    }
}