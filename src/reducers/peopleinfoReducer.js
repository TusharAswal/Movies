import { PEEPS } from '../utils/types';

let defaultState = { loading: true, data: [] };

export const peopleinfoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case PEEPS.POPULAR_PEOPLE:
            return {
                ...state,
                data19: action.payload,
            }

        case PEEPS.PEOPLE_DETAIL:
            return {
                ...state,
                data20: action.payload,
            }

        case PEEPS.PERS_DETAIL:
            return {
                ...state,
                data21: action.payload,
            }

        case PEEPS.PERS_IMG:
            return {
                ...state,
                data22: action.payload,
            }

        case PEEPS.WORKIN:
            return {
                ...state,
                data23: action.payload,
            }

        case PEEPS.WORKINTV:
            return {
                ...state,
                data24: action.payload,
            }


        default: {
            return { ...state }
        }
    }
}