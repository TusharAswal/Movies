import { TVS } from '../utils/types';

let defaultState = { loading: true, data: [] };

export const tvshowsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TVS.AIRING_TODAY:
            return {
                ...state,
                loading: false,
                data25: action.payload
            }
        case TVS.POPULARTV:
            return {
                ...state,
                loading: false,
                data26: action.payload,
            }
        case TVS.TOPRATEDTV:
            return {
                ...state,
                loading: false,
                data27: action.payload,
            }

        case TVS.TVDETAILS:
            return {
                ...state,
                data28: action.payload,
            }

        case TVS.TVIMG:
            return {
                ...state,
                data29: action.payload,
            }
        case TVS.TVSEASON:
            return {
                ...state,
                data30: action.payload,
            }
        case TVS.GETRAT:
            return {
                ...state,
                data31: action.payload,
            }
        case TVS.GETFIRSTAIR:
            return {
                ...state,
                data32: action.payload,
            }
        case TVS.GETLASTAIR:
            return {
                ...state,
                data33: action.payload,
            }
        case TVS.GETNET:
            return {
                ...state,
                data34: action.payload,
            }
        case TVS.GETSHOWTYPE:
            return {
                ...state,
                data35: action.payload,
            }

        case TVS.GETSHOWSTAT:
            return {
                ...state,
                data36: action.payload,
            }
        case TVS.GETCREATOR:
            return {
                ...state,
                data37: action.payload,
            }

        case TVS.SIMILARTV:
            return {
                ...state,
                data38: action.payload,
            }
        case TVS.CASTTV:
            return {
                ...state,
                data39: action.payload,
            }
        case TVS.RUNTV:
            return {
                ...state,
                data40: action.payload,
            }
        case TVS.OVER:
            return {
                ...state,
                data11: action.payload,
            }
        default:
            return { ...state }
    }
}