import { SET_TEXT } from '../actionsTypes/headerActionTypes';

export const setText = (text) => {
    return {
        type: SET_TEXT,
        payload: text
    };
}