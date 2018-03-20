import { NOWPLAYING, ERROR, TOPBOXOFFICE } from '../actions/actions';
import { combineReducers } from 'redux';

let defaultState = { loading: true, data: [] };
const movieReducer = (state = defaultState, action) => {
      console.log("Actions : ",action.payload)
      switch (action.type) {
            case NOWPLAYING:
                  return {
                        ...state,
                        loading: false,
                        data: action.payload
                  }
            default:
                  return { ...state }
      }
}

const topmovieReducer= (state = defaultState, action) => {
      switch (action.type){
            case TOPBOXOFFICE:
                  return {
                        ...state,
                        loading:false,
                        data: action.payload
                   }
            default:
            return{ ...state}

      }
}
const rootReducer = combineReducers(
      {
            movieReducer,topmovieReducer

      })
export default rootReducer;