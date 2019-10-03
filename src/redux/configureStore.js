import { createStore, combineReducers, applyMiddleware } from 'redux';
import { MediaList } from './mediaList';
import { PhotoOfTheDay } from './photoOfTheDay';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            mediaList: MediaList,
            photoOfTheDay: PhotoOfTheDay
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
