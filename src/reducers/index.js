
import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer';
import { tvshowsReducer } from './tvshowsReducer';
import { peopleinfoReducer } from './peopleinfoReducer';
import { filterReducer } from './filterReducer';
export const rootReducer = combineReducers(
    {
        movieReducer,
        tvshowsReducer,
        peopleinfoReducer,
        filterReducer,

    })

export default rootReducer;