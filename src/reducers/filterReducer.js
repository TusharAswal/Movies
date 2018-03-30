import { FILTER } from '../utils/types';

let defaultState = { loading: true, data: [] };

export const filterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FILTER.ALLGENRES:
            return {
                ...state,
                data13: action.payload,
            }
        case FILTER.ALLGENRES1:
            return {
                ...state,
                data14: action.payload,
            }
        case FILTER.CONTENTIS:
            return {
                ...state,
                data15: action.payload,
            }

        case FILTER.SEARCH_PEOPLE:
            return {
                ...state,
                loading: false,
                data16: action.payload,
            }

        case FILTER.SEARCHTV:
            return {
                ...state,
                loading: false,
                data17: action.payload,
            }

        case FILTER.SEARCHMOVIE:
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