import {
    SIMILARTV,
    CASTTV,
    RUNTV,
    TVDETAILS,
    TVIMG,
    GETRAT,
    GETFIRSTAIR,
    GETLASTAIR,
    GETNET,
    GETSHOWTYPE,
    GETSHOWSTAT,
    GETCREATOR,
    TOPRATEDTV,
    TVSEASON,
    AIRING_TODAY,
    POPULARTV,
    OVER,
} from '../actions/tvshowsAction';
let defaultState = { loading: true, data: [] };

export const tvshowsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case AIRING_TODAY:
            return {
                ...state,
                loading: false,
                data25: action.payload
            }
        case POPULARTV:
            return {
                ...state,
                loading: false,
                data26: action.payload,
            }
        case TOPRATEDTV:
            return {
                ...state,
                loading: false,
                data27: action.payload,
            }

        case TVDETAILS:
            return {
                ...state,
                data28: action.payload,
            }

        case TVIMG:
            return {
                ...state,
                data29: action.payload,
            }
        case TVSEASON:
            return {
                ...state,
                data30: action.payload,
            }
        case GETRAT:
            return {
                ...state,
                data31: action.payload,
            }
        case GETFIRSTAIR:
            return {
                ...state,
                data32: action.payload,
            }
        case GETLASTAIR:
            return {
                ...state,
                data33: action.payload,
            }
        case GETNET:
            return {
                ...state,
                data34: action.payload,
            }
        case GETSHOWTYPE:
            return {
                ...state,
                data35: action.payload,
            }

        case GETSHOWSTAT:
            return {
                ...state,
                data36: action.payload,
            }
        case GETCREATOR:
            return {
                ...state,
                data37: action.payload,
            }

        case SIMILARTV:
            return {
                ...state,
                data38: action.payload,
            }
        case CASTTV:
            return {
                ...state,
                data39: action.payload,
            }
        case RUNTV:
            return {
                ...state,
                data40: action.payload,
            }
        case OVER:
            return {
                ...state,
                data11: action.payload,
            }
        default:
            return { ...state }
    }
}