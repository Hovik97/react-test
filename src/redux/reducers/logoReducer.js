import { GET_LOGO } from '../actionsTypes/logoActionTypes';

const initialState = {
    logoUrl: './assets/logo.png'
}

export const logoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOGO: return {
            ...state,
            logoUrl: action.payload
        };
        default: return state;
    }
}