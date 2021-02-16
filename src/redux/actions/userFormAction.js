import { GET_FORM_FIELDS } from '../actionsTypes/userFormActionTypes';
import { API } from '../../api';
import { url } from '../../requestUrls';

export const getFormField = () => {
    return dispatch => {
        API.get(url.getUserFormField).then(res => {
            dispatch({
                type: GET_FORM_FIELDS,
                payload: res.appFields
            });
        });
    };
}