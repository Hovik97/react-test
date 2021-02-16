import { GET_FORM_FIELDS } from '../actionsTypes/userFormActionTypes';

const initialState = {
    formFields: [],
    fields: ['first_name', 'last_name', 'company', 'job_title', 'email']
}

export const userFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FORM_FIELDS: return {
            ...state,
            formFields: action.payload.filter(field => state.fields.includes(field.name))
        }
        default: return state;
    }
}