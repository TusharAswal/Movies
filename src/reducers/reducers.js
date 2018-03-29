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
      GENRES,
      TVDETAILS,
      TVIMG,
      GETRAT,
      GETFIRSTAIR,
      GETLASTAIR,
      GETNET,
      GETSHOWTYPE,
      GETSHOWSTAT,
      GETCREATOR,
      OVER,
      SIMILARTV,
      CASTTV,
      RUNTV,
      POPULAR_PEOPLE,
      TVSEASON,
      POPULARTV,
      TOPRATEDTV,
      SEARCHMOVIE,
      SEARCHTV,
      SEARCH_PEOPLE,
      PEOPLE_DETAIL,
      PERS_DETAIL,
      PERS_IMG,
      WORKIN,
      WORKINTV,
      ALLGENRES,
      ALLGENRES1,
      CONTENTIS,
      DISCOVERNOW
} from '../actions/actions';
import { combineReducers } from 'redux';



let defaultState = { loading: true, data: [] };
const movieReducer = (state = defaultState, action) => {

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

const topmovieReducer = (state = defaultState, action) => {
      switch (action.type) {
            case TOPBOXOFFICE:
                  return {
                        ...state,
                        loading: false,
                        data: action.payload
                  }
            default:
                  return { ...state }

      }
}

const airingTodayReducer = (state = defaultState, action) => {
      switch (action.type) {
            case AIRING_TODAY:
                  return {
                        ...state,
                        loading: false,
                        data: action.payload
                  }
            default:
                  return { ...state }
      }
}

const upcomingMovieReducer = (state = defaultState, action) => {
      switch (action.type) {
            case UPCOMING:
                  return {
                        ...state,
                        loading: false,
                        data: action.payload
                  }
            default:
                  return { ...state }
      }
}

const popularMovieReducer = (state = defaultState, action) => {
      switch (action.type) {
            case POPULAR:
                  return {
                        ...state,
                        loading: false,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const mdetailReducer = (state = defaultState, action) => {
      switch (action.type) {
            case MOVIE_DETAILS:

                  return {

                        ...state,
                        isLoadng: false,
                        data: action.payload
                  }
            default: {
                  return { ...state }
            }
      }
}

const otherdetailReducer = (state = defaultState, action) => {
      switch (action.type) {
            case OTHERDETAILS:

                  return {

                        ...state,
                        isLoadng: false,
                        data: action.payload
                  }
            default: {
                  return { ...state }
            }
      }
}

const castReducer = (state = defaultState, action) => {
      switch (action.type) {
            case CAST:
                  return {
                        ...state,
                        data: action.payload
                  }
            default: {
                  return { ...state }
            }

      }
}

const rebureReducer = (state = defaultState, action) => {
      switch (action.type) {
            case REBURE:
                  return {
                        ...state,
                        data: action.payload
                  }
            default: {
                  return { ...state }
            }
      }
}

const crewReducer = (state = defaultState, action) => {
      switch (action.type) {
            case CREW:
                  return {
                        ...state,
                        data: action.payload
                  }
            default: {
                  return { ...state }
            }

      }
}

const similarmovReducer = (state = defaultState, action) => {
      switch (action.type) {
            case SIMILARMOV:
                  return {
                        ...state,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const genresReducer = (state = defaultState, action) => {
      switch (action.type) {
            case GENRES:
                  return {
                        ...state,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const tvdetailReducer = (state = defaultState, action) => {
      switch (action.type) {
            case TVDETAILS:
                  return {
                        ...state,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const tvimageReducer = (state = defaultState, action) => {
      switch (action.type) {
            case TVIMG:
                  return {
                        ...state,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const getRatReducer = (state = defaultState, action) => {
      switch (action.type) {
            case GETRAT:
                  return {
                        ...state,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const getfirstAirReducer = (state = defaultState, action) => {
      switch (action.type) {
            case GETFIRSTAIR:
                  return {
                        ...state,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const getlastAirReducer = (state = defaultState, action) => {
      switch (action.type) {
            case GETLASTAIR:
                  return {
                        ...state,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const getnetReducer = (state = defaultState, action) => {
      switch (action.type) {
            case GETNET:
                  return {
                        ...state,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const getshowTypeReducer = (state = defaultState, action) => {
      switch (action.type) {
            case GETSHOWTYPE:
                  return {
                        ...state,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const getshowStatReducer = (state = defaultState, action) => {
      switch (action.type) {
            case GETSHOWSTAT:
                  return {
                        ...state,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const getcreatorReducer = (state = defaultState, action) => {
      switch (action.type) {
            case GETCREATOR:
                  return {
                        ...state,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const getoverviewReducer = (state = defaultState, action) => {
      switch (action.type) {
            case OVER:
                  return {
                        ...state,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const getsimilartvReducer = (state = defaultState, action) => {
      switch (action.type) {
            case SIMILARTV:
                  return {
                        ...state,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const casttvReducer = (state = defaultState, action) => {
      switch (action.type) {
            case CASTTV:
                  return {
                        ...state,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const tvruntimeReducer = (state = defaultState, action) => {
      switch (action.type) {
            case RUNTV:
                  return {
                        ...state,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const popularpeepsReducer = (state = defaultState, action) => {
      switch (action.type) {
            case POPULAR_PEOPLE:
                  return {
                        ...state,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const tvseasonReducer = (state = defaultState, action) => {
      switch (action.type) {
            case TVSEASON:
                  return {
                        ...state,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const populartvReducer = (state = defaultState, action) => {
      switch (action.type) {
            case POPULARTV:
                  return {
                        ...state,
                        loading: false,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const topratedtvReducer = (state = defaultState, action) => {
      switch (action.type) {
            case TOPRATEDTV:
                  return {
                        ...state,
                        loading: false,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const gotmovieReducer = (state = defaultState, action) => {
      switch (action.type) {
            case SEARCHMOVIE:
                  return {
                        ...state,
                        loading: false,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const gottvReducer = (state = defaultState, action) => {
      switch (action.type) {
            case SEARCHTV:
                  return {
                        ...state,
                        loading: false,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const gotnameReducer = (state = defaultState, action) => {
      switch (action.type) {
            case SEARCH_PEOPLE:
                  return {
                        ...state,
                        loading: false,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const getcelebdetailsReducer = (state = defaultState, action) => {
      switch (action.type) {
            case PEOPLE_DETAIL:
                  return {
                        ...state,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const gettingpersonalReducer = (state = defaultState, action) => {
      switch (action.type) {
            case PERS_DETAIL:
                  return {
                        ...state,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const gethisimgReducer = (state = defaultState, action) => {
      switch (action.type) {
            case PERS_IMG:
                  return {
                        ...state,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const donemoviesReducer = (state = defaultState, action) => {
      switch (action.type) {
            case WORKIN:
                  return {
                        ...state,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const donetvReducer = (state = defaultState, action) => {
      switch (action.type) {
            case WORKINTV:
                  return {
                        ...state,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const filtergenReducer = (state = defaultState, action) => {
      switch (action.type) {
            case ALLGENRES:
                  return {
                        ...state,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const filtergenReducer1 = (state = defaultState, action) => {
      switch (action.type) {
            case ALLGENRES1:
                  return {
                        ...state,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }

}

const contentisReducer = (state = defaultState, action) => {
      switch (action.type) {
            case CONTENTIS:
                  return {
                        ...state,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
            }
      }
}

const discoverReducer = (state = defaultState, action) => {
      switch (action.type) {
            case DISCOVERNOW:
                  return {
                        ...state,
                        data: action.payload,
                  }
            default: {
                  return { ...state }
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
            genresReducer,
            tvdetailReducer,
            tvimageReducer,
            getRatReducer,
            getfirstAirReducer,
            getlastAirReducer,
            getnetReducer,
            getshowTypeReducer,
            getshowStatReducer,
            getcreatorReducer,
            getoverviewReducer,
            getsimilartvReducer,
            casttvReducer,
            tvruntimeReducer,
            popularpeepsReducer,
            tvseasonReducer,
            populartvReducer,
            topratedtvReducer,
            gotmovieReducer,
            gottvReducer,
            gotnameReducer,
            getcelebdetailsReducer,
            gettingpersonalReducer,
            gethisimgReducer,
            donemoviesReducer,
            donetvReducer,
            filtergenReducer,
            filtergenReducer1,
            contentisReducer,
            discoverReducer

      })
export default rootReducer;