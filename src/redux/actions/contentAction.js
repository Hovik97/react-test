import { 
    TYPE_FILTER, 
    GET_CONTENTS_REQUEST,
    GET_CONTENTS_SUCCESS,
    GET_CONTENTS_ERROR,
    SEARCH_FILTER, 
    GET_CONTENT 
} from '../actionsTypes/contentActionTypes';
import { API } from '../../api';
import { url } from '../../requestUrls';


export const getContents = () => {
    return dispatch => {
        dispatch(getContentsRequest())
        API.get(url.getContents).then(res => {
            dispatch(getContentsSuccess(res.contents))
        })
        .catch(err => {
            dispatch(getContentsError(err))
        }); 
    };
};

export const getContentsRequest = () => {
    return dispatch => {
        dispatch({
            type: GET_CONTENTS_REQUEST,
        });
    };
};

export const getContentsSuccess = (payload) => {
    return dispatch => {
        dispatch({
            type: GET_CONTENTS_SUCCESS,
            payload
        });
    };
};

export const getContentsError = (payload) => {
    return dispatch => {
        dispatch({
            type: GET_CONTENTS_ERROR,
            payload
        });
    };
};



export const getContent = (id) => {
    return dispatch => {
        API.get(url.getContent + `/${id}/2731/2570`).then(res => {
            dispatch({
                type: GET_CONTENT,
                payload: res
            });
        });
    };
}

export const filterCategoryByName = (name) => {
    return {
        type: TYPE_FILTER,
        payload: name
    };
}

export const filterCategoryBySearch = (text) => {
    return {
        type: SEARCH_FILTER,
        payload: text
    };
}