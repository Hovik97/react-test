import { GET_CATEGORIES } from '../actionsTypes/categoriesActionTypes';
import { SET_TEXT } from '../actionsTypes/headerActionTypes';
import { API } from '../../api';
import { url } from '../../requestUrls';

export const getCategories = () => {
    return dispatch => {
        API.get(url.getCategories).then(res => {
            dispatch({
                type: GET_CATEGORIES,
                payload: res.cats
            });

            dispatch({
                type: SET_TEXT,
                payload: res.title
            });
        });
    };
}