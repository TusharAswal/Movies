
import { URL, APIKEY, PEEPS } from '../utils/types'

export function getcelebdetails(id) {
    return (dispatch) => {
        fetch(URL + 'person/' + id + '?api_key=' + APIKEY + '&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: PEEPS.PEOPLE_DETAIL, payload: responseJson })
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
                dispatch({ type: PEEPS.PERS_DETAIL, payload: responseJson })
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
                dispatch({ type: PEEPS.PERS_IMG, payload: responseJson.profiles })
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
                dispatch({ type: PEEPS.WORKIN, payload: responseJson.cast })
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
                dispatch({ type: PEEPS.WORKINTV, payload: responseJson.cast })
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
                dispatch({ type: PEEPS.POPULAR_PEOPLE, payload: responseJson.results })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}
