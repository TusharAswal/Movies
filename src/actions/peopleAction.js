export const PEOPLE_DETAIL = 'PEOPLE_DETAIL';
export const PERS_DETAIL = 'PERS_DETAIL';
export const PERS_IMG = 'PERS_IMG';
export const WORKIN = 'WORKIN';
export const WORKINTV = 'WORKINTV';
export const POPULAR_PEOPLE = 'POPULAR_PEOPLE';

export function getcelebdetails(id) {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/person/' + id + '?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
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
        fetch('https://api.themoviedb.org/3/person/' + id + '?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
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
        fetch('https://api.themoviedb.org/3/person/' + id + '/images?api_key=9a2955322d7a5fbef5b01d4e52abc0ff')
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
        fetch('https://api.themoviedb.org/3/person/' + id + '/movie_credits?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
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
        fetch('https://api.themoviedb.org/3/person/' + id + '/tv_credits?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
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
        fetch('https://api.themoviedb.org/3/person/popular?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&page=1')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: POPULAR_PEOPLE, payload: responseJson.results })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}
