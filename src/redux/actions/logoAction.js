import { GET_LOGO } from '../actionsTypes/logoActionTypes';
import { url } from '../../requestUrls';
import { API } from '../../api';

export const getLogo = () => {
    return dispatch => {
        API.getText(url.getLogo).then(res => {
            dispatch({
                type: GET_LOGO,
                payload: res
            })
        });
    };
}