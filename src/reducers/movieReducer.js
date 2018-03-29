import {
    NOWPLAYING,
    ERROR,
    TOPBOXOFFICE,
    UPCOMING,
    POPULAR,
    MOVIE_DETAILS,
    OTHERDETAILS,
    CAST,
    REBURE,
    SIMILARMOV,
    DISCOVERNOW,
    CREW,
    OVER,
    GENRES,

} from '../actions/movieAction';

let defaultState = { loading: true, data: [] };
export const movieReducer = (state = defaultState, action) => {

    switch (action.type) {
        case NOWPLAYING:
            return {
                ...state,
                loading: false,
                moviedata: action.payload
            }

        case TOPBOXOFFICE:
            return {
                ...state,
                loading: false,
                data1: action.payload
            }
        case UPCOMING:
            return {
                ...state,
                loading: false,
                data2: action.payload
            }
        case POPULAR:
            return {
                ...state,
                loading: false,
                data3: action.payload,
            }

        case MOVIE_DETAILS:
console.log("MOVIE DETAILS",action.payload)
            return {

                ...state,
                isLoadng: false,
                data4: action.payload
            }

        case OTHERDETAILS:
            return {

                ...state,
                isLoadng: false,
                data5: action.payload
            }

        case GENRES:
            return {
                ...state,
                data6: action.payload,
            }

        case SIMILARMOV:
            return {
                ...state,
                data7: action.payload,
            }

        case CAST:
            return {
                ...state,
                data8: action.payload
            }
        case REBURE:
            return {
                ...state,
                data9: action.payload
            }

        case CREW:
            return {
                ...state,
                data10: action.payload
            }

        case OVER:
            return {
                ...state,
                data11: action.payload,
            }

        case DISCOVERNOW:
            return {
                ...state,
                data12: action.payload,
            }
        default:
            return { ...state }
    }
}