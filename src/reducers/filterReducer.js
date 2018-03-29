import {
    ALLGENRES,
    ALLGENRES1,
    CONTENTIS,
    SEARCHMOVIE,
    SEARCHTV,
    SEARCH_PEOPLE,
} from '../actions/filterAction';
let defaultState = { loading: true, data: [] };

export const filterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ALLGENRES:
            return {
                ...state,
                data13: action.payload,
            }
        case ALLGENRES1:
            return {
                ...state,
                data14: action.payload,
            }
        case CONTENTIS:
            return {
                ...state,
                data15: action.payload,
            }

        case SEARCH_PEOPLE:
            return {
                ...state,
                loading: false,
                data16: action.payload,
            }

        case SEARCHTV:
            return {
                ...state,
                loading: false,
                data17: action.payload,
            }

        case SEARCHMOVIE:
            return {
                ...state,
                loading: false,
                data18: action.payload,
            }
        default: {
            return { ...state }
        }
    }

}