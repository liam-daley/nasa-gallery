import * as ActionTypes from './ActionTypes';

export const PhotoOfTheDay = (state = {
        isLoading: true,
        errMess: null,
        photoOfTheDay: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PHOTO:
            return {...state, isLoading: false, errMess: null, photoOfTheDay: action.payload};

        case ActionTypes.PHOTO_LOADING:
            return {...state, isLoading: true, errMess: null, photoOfTheDay: []};

        case ActionTypes.PHOTO_FAILED:
            return {...state, isLoading: false, errMess: action.payLoad};

        default:
            return state;
    }
}
