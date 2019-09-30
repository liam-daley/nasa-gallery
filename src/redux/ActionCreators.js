import * as ActionTypes from './ActionTypes';
import { baseUrl, search } from '../shared/baseUrl';

export const fetchMediaList = () => (dispatch) => {
    
    dispatch(mediaListLoading(true));

    return fetch(baseUrl + search + 'apollo') // fix this
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(mediaList => dispatch(addMediaList(mediaList)))
        .catch(error => dispatch(mediaListFailed(error.message)));
}

export const mediaListLoading = () => ({
    type: ActionTypes.MEDIA_LOADING
});

export const mediaListFailed = (errmess) => ({
    type: ActionTypes.MEDIA_FAILED,
    payload: errmess
});

export const addMediaList = (mediaList) => ({
    type: ActionTypes.ADD_MEDIA,
    payload: mediaList
});
