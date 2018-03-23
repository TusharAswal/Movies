import { 
      NOWPLAYING,
      ERROR,
      TOPBOXOFFICE,
      AIRING_TODAY,
      UPCOMING,
      POPULAR,
      MOVIE_DETAILS,
      OTHERDETAILS,
      CAST,
      REBURE,
      CREW,
      SIMILARMOV,
      GENRES
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
                        data:action.payload,
            }
            default:{
                  return{...state}
            }
      }
}

const mdetailReducer=( state= defaultState, action)=> {
      switch(action.type){
            case MOVIE_DETAILS:
            
            return{
                  
                  ...state,
                  isLoadng:false,
                  data:action.payload
            }
            default:{
                  return{...state}
            }
      }
}

const otherdetailReducer=( state= defaultState, action)=> {
      switch(action.type){
            case OTHERDETAILS:
            console.log("TIME",action.payload)
            return{
                  
                  ...state,
                  isLoadng:false,
                  data:action.payload
            }
            default:{
                  return{...state}
            }
      }
}

const castReducer=( state= defaultState, action) =>{
      switch(action.type){
            case CAST: 
                  return{
                        ...state,
                        data:action.payload
                  }
                  default: {
                        return{...state}
                  }

      }
}

const rebureReducer=(state= defaultState, action) =>{
      switch(action.type){
            case REBURE:
            return{
                  ...state,
                  data:action.payload
            }
            default:{
                  return{...state}
            }
      }
}

const crewReducer=( state= defaultState, action) =>{
      switch(action.type){
            case CREW: 
                  return{
                        ...state,
                        data:action.payload
                  }
                  default: {
                        return{...state}
                  }

      }
}

const similarmovReducer=( state= defaultState, action)=> {
      switch(action.type) {
            case SIMILARMOV:
            return{
                  ...state,
                  data:action.payload,
            }
            default: {
                  return{...state}
            }
      }
}

const genresReducer=( state= defaultState, action)=>{
      switch(action.type) {
            case GENRES:
            return {
                  ...state,
                  data:action.payload,
            }
            default:{
                  return{...state}
            }
      }
}
const rootReducer = combineReducers(
      {
            movieReducer,
            topmovieReducer,
            airingTodayReducer,
            upcomingMovieReducer,
            popularMovieReducer,
            mdetailReducer,
            otherdetailReducer,
            castReducer,
            rebureReducer,
            crewReducer,
            similarmovReducer,
            genresReducer

      })
export default rootReducer;