import { MOVIER } from '../utils/types';

const defaultState = {
  loading: true,
  data: [],
};
export default const movieReducer = (state = defaultState, action) => {
  switch (action.type) {
        case MOVIER.NOWPLAYING:
            return {
                ...state,
                loading: false,
                moviedata: action.payload,
            }

        case MOVIER.TOPBOXOFFICE:
            return {
                ...state,
                loading: false,
                data1: action.payload
            }
        case MOVIER.UPCOMING:
            return {
                ...state,
                loading: false,
                data2: action.payload
            }
        case MOVIER.POPULAR:
            return {
                ...state,
                loading: false,
                data3: action.payload
            }

        case MOVIER.MOVIE_DETAILS:
            console.log("MOVIE DETAILS", action.payload)
            return {

                ...state,
                isLoadng: false,
                data4: action.payload
            }

        case MOVIER.OTHERDETAILS:
            return {

                ...state,
                isLoadng: false,
                data5: action.payload
            }

        case MOVIER.GENRES:
            return {
                ...state,
                data6: action.payload
            }

        case MOVIER.SIMILARMOV:
            return {
                ...state,
                data7: action.payload
            }

        case MOVIER.CAST:
            return {
                ...state,
                data8: action.payload
            }
        case MOVIER.REBURE:
            return {
                ...state,
                data9: action.payload
            }

        case MOVIER.CREW:
            return {
                ...state,
                data10: action.payload
            }

        case MOVIER.DISCOVERNOW:
            return {
                ...state,
                data12: action.payload
            }
        default:
            return {
                ...state
            }
    }
}
