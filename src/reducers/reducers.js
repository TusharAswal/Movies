import { NOWPLAYING, ERROR } from '../actions/actions';
import { combineReducers } from 'redux';

let defaultState = { loading: true, data: [] };
const movieReducer = (state = defaultState, action) => {
      console.log("Actions : ",action.paylaod)
      switch (action.type) {
            case NOWPLAYING:
                  return {
                        ...state,
                        loading: false,
                        data: action.paylaod
                  }
            default:
                  return { ...state }
      }
}
const rootReducer = combineReducers(
      {
            movieReducer
      

      })
export default rootReducer;