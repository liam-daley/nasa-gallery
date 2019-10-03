import * as ActionTypes from './ActionTypes';
import { baseUrl, search, photoOfTheDay, apiKey, imageUrl } from '../shared/apiDefinitions';

export const fetchMediaList = () => (dispatch) => {
    
    dispatch(mediaListLoading(true));

    return fetch(imageUrl + search + 'apollo%2011&description=moon%20landing&media_type=image')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        })
        .then(response => response.clone().json())
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

export const fetchPhotoOfTheDay = () => (dispatch) => {
    
    dispatch(photoOfTheDayLoading(true));

    return fetch(baseUrl + photoOfTheDay + apiKey)
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        })
        .then(response => response.clone().json())
        .then(photoOfTheDay => dispatch(addPhotoOfTheDay(photoOfTheDay)))
        .catch(error => dispatch(photoOfTheDayFailed(error.message)));
}

export const photoOfTheDayLoading = () => ({
    type: ActionTypes.PHOTO_LOADING
});

export const photoOfTheDayFailed = (errmess) => ({
    type: ActionTypes.PHOTO_FAILED,
    payload: errmess
});

export const addPhotoOfTheDay = (photoOfTheDay) => ({
    type: ActionTypes.ADD_PHOTO,
    payload: photoOfTheDay
});