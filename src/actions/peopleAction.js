export const PEOPLE_DETAIL = 'PEOPLE_DETAIL';
export const PERS_DETAIL = 'PERS_DETAIL';
export const PERS_IMG = 'PERS_IMG';
export const WORKIN = 'WORKIN';
export const WORKINTV = 'WORKINTV';
export const POPULAR_PEOPLE = 'POPULAR_PEOPLE';
import { URL, APIKEY } from '../utils/types'

export function getcelebdetails(id) {
    return (dispatch) => {
        fetch(URL + 'person/' + id + '?api_key=' + APIKEY + '&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: PEOPLE_DETAIL, payload: responseJson })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function getpersonaldetails(id) {
    return (dispatch) => {
        fetch(URL + 'person/' + id + '?api_key=' + APIKEY + '&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: PERS_DETAIL, payload: responseJson })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function getpersonalimg(id) {
    return (dispatch) => {
        fetch(URL + 'person/' + id + '/images?api_key=' + APIKEY + '')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: PERS_IMG, payload: responseJson.profiles })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function getworkinmovies(id) {
    return (dispatch) => {
        fetch(URL + 'person/' + id + '/movie_credits?api_key=' + APIKEY + '&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: WORKIN, payload: responseJson.cast })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function getworkintv(id) {
    return (dispatch) => {
        fetch(URL + 'person/' + id + '/tv_credits?api_key=' + APIKEY + '&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: WORKINTV, payload: responseJson.cast })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}
export function getpopularPeople(id) {
    return (dispatch) => {
        fetch(URL + 'person/popular?api_key=' + APIKEY + '&language=en-US&page=1')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: POPULAR_PEOPLE, payload: responseJson.results })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}
