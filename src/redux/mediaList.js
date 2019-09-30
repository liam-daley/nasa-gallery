import * as ActionTypes from './ActionTypes';

export const MediaList = (state = {
        isLoading: true,
        errMess: null,
        mediaList: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_MEDIA:
            return {...state, isLoading: false, errMess: null, mediaList: action.payload};

        case ActionTypes.MEDIA_LOADING:
            return {...state, isLoading: true, errMess: null, mediaList: []};

        case ActionTypes.MEDIA_FAILED:
            return {...state, isLoading: false, errMess: action.payLoad};

        default:
            return state;
    }
}
