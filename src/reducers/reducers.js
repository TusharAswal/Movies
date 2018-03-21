import { 
      NOWPLAYING,
      ERROR,
      TOPBOXOFFICE,
      AIRING_TODAY,
      UPCOMING,
      POPULAR
      } from '../actions/actions';
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

const airingTodayReducer=(state= defaultState, action)=> {
      switch(action.type){
            case AIRING_TODAY:
                  return {
                        ...state,
                        loading:false,
                        data:action.payload
                  }
                  default:
                  return{ ...state}
      }
}

const upcomingMovieReducer=(state = defaultState, action)=>{
      switch(action.type){  
           case UPCOMING:
            return {
                  ...state,
                  loading: false,
                  data:action.payload
            }
            default:
            return{ ...state}
      }
}

const popularMovieReducer=( state = defaultState, action)=>{
      switch(action.type){
            case POPULAR:
                  return{
                        ...state,
                        loading:false,
                        data:action.payload
            }
            default:{
                  return{...state}
            }
      }
}
const rootReducer = combineReducers(
      {
            movieReducer,topmovieReducer,airingTodayReducer,upcomingMovieReducer,popularMovieReducer

      })
export default rootReducer;