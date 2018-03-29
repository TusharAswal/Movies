export const ALLGENRES = 'ALLGENRES';
export const ALLGENRES1 = 'ALLGENRES1';
export const CONTENTIS = 'CONTENTIS';
export const SEARCHMOVIE = 'SEARCHMOVIE';
export const SEARCHTV = 'SEARCHTV';
export const SEARCH_PEOPLE = 'SEARCH_PEOPLE';

export function getallgenres(sy, ey, gen) {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=' + sy + '&release_date.lte=' + ey + '&with_genres=' + gen)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: ALLGENRES, payload: responseJson })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function getallgenres1() {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {

                dispatch({ type: ALLGENRES1, payload: responseJson })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function getcontent(from, to, gen) {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=' + from + '&primary_release_date.lte=' + to + '&with_genres=' + gen)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: CONTENTIS, payload: responseJson })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function searchmovie(moviename) {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/search/movie?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&query=' + moviename + '&page=1&include_adult=false')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: SEARCHMOVIE, payload: responseJson.results })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}


export function searchtv(tvname) {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/search/movie?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&query=' + tvname + '&page=1&include_adult=false')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: SEARCHTV, payload: responseJson.results })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function searchname(name) {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/search/person?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&query=' + name + '&page=1&include_adult=false')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: SEARCH_PEOPLE, payload: responseJson.results })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}