import { URL, APIKEY, FILTER } from '../utils/types';

export function getallgenres(sy, ey, gen) {
    return (dispatch) => {
        fetch(URL + 'discover/movie?api_key=' + APIKEY + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=' + sy + '&release_date.lte=' + ey + '&with_genres=' + gen)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: FILTER.ALLGENRES, payload: responseJson })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function getallgenres1() {
    return (dispatch) => {
        fetch(URL + 'genre/movie/list?api_key=' + APIKEY + '&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {

                dispatch({ type: FILTER.ALLGENRES1, payload: responseJson })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function getcontent(from, to, gen) {
    return (dispatch) => {
        fetch(URL + 'discover/movie?api_key=' + APIKEY + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=' + from + '&primary_release_date.lte=' + to + '&with_genres=' + gen)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: FILTER.CONTENTIS, payload: responseJson })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function searchmovie(moviename) {
    return (dispatch) => {
        fetch(URL + 'search/movie?api_key=' + APIKEY + '&language=en-US&query=' + moviename + '&page=1&include_adult=false')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: FILTER.SEARCHMOVIE, payload: responseJson.results })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}


export function searchtv(tvname) {
    return (dispatch) => {
        fetch(URL + 'search/movie?api_key=' + APIKEY + '&language=en-US&query=' + tvname + '&page=1&include_adult=false')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: FILTER.SEARCHTV, payload: responseJson.results })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function searchname(name) {
    return (dispatch) => {
        fetch(URL + 'search/person?api_key=' + APIKEY + '&language=en-US&query=' + name + '&page=1&include_adult=false')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: FILTER.SEARCH_PEOPLE, payload: responseJson.results })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}