import { TYPE_FILTER, SEARCH_FILTER, GET_CONTENT,
    GET_CONTENTS_REQUEST, GET_CONTENTS_SUCCESS, GET_CONTENTS_ERROR } from '../actionsTypes/contentActionTypes';

const initialSate = {
    isLoading: false,
    contents: [],
    content: {},
    allContent: [],
    name: '',
    description: ''
}

export const contentReducer = (state = initialSate, action) => {
    switch (action.type) {
        case GET_CONTENTS_REQUEST: 
            return {
                ...state,
                isLoading: true
            };
        case GET_CONTENTS_SUCCESS:
            return {
                ...state,
                contents: action.payload[0] ? action.payload[0].contentInf : [],
                name: action.payload[0] ? action.payload[0].catName : '',
                description: action.payload[0] ? action.payload[0].description : '',
                allContent: action.payload,
                isLoading: false
            };
        case GET_CONTENTS_ERROR: 
            return {
                ...state,
                isLoading: false
            };
        case TYPE_FILTER:
            const data = state.allContent.find(cont => cont.catName === action.payload);
            return {
                ...state,
                contents: data.contentInf,
                name: data.catName,
                description: data.description
            };
        case SEARCH_FILTER:
            const stateContents = state.allContent.find(cont => cont.catName === state.name);
            const filterData = stateContents.contentInf.filter(cont => cont.name.includes(action.payload));

            return {
                ...state,
                contents: filterData
            };
        case GET_CONTENT: return {
            ...state,
            content: action.payload
        };
        default: return state;
    }
}