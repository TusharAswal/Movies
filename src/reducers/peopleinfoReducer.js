import {
    PEOPLE_DETAIL,
    PERS_DETAIL,
    PERS_IMG,
    WORKIN,
    WORKINTV,
    POPULAR_PEOPLE,
     
} from '../actions/peopleAction';
let defaultState = { loading: true, data: [] };

export const peopleinfoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case POPULAR_PEOPLE:
            return {
                ...state,
                data19: action.payload,
            }

        case PEOPLE_DETAIL:
            return {
                ...state,
                data20: action.payload,
            }

        case PERS_DETAIL:
            return {
                ...state,
                data21: action.payload,
            }

        case PERS_IMG:
            return {
                ...state,
                data22: action.payload,
            }

        case WORKIN:
            return {
                ...state,
                data23: action.payload,
            }

        case WORKINTV:
            return {
                ...state,
                data24: action.payload,
            }


        default: {
            return { ...state }
        }
    }
}