
import { URL, APIKEY, MOVIER } from '../utils/types'

export function nowPlaying(lang = 'en-US', page = 1) {
    return (dispatch) => {
        fetch(URL + 'movie/now_playing?api_key=' + APIKEY + '&language' + lang + '&page=' + page)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: MOVIER.NOWPLAYING, payload: responseJson.results })
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

export function topBoxoffice() {
    return (dispatch) => {
        fetch(URL + 'movie/top_rated?api_key=' + APIKEY + '&language=en-US&page=1')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: MOVIER.TOPBOXOFFICE, payload: responseJson.results })
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

export function upcoming() {
    return (dispatch) => {
        fetch(URL + 'movie/upcoming?api_key=' + APIKEY + '&language=en-US&page=1')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: MOVIER.UPCOMING, payload: responseJson.results })

            })

            .catch((error) => {
                console.error(error);
            });
    }
}

export function popular() {
    return (dispatch) => {
        fetch(URL + 'movie/popular?api_key=' + APIKEY + '&language=en-US&page=1')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: MOVIER.POPULAR, payload: responseJson.results })
            })

            .catch((error) => {
                console.error(error);
            })
    }
}

export function moviedetails(id) {
    return (dispatch) => {
        fetch(URL + 'movie/' + id + '/images?api_key=' + APIKEY + '&language=en-US&include_image_language=en')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("posters", responseJson.posters)
                dispatch({ type: MOVIER.MOVIE_DETAILS, payload: responseJson.posters })
            })
            .catch((error) => {
                console.error(error);
            })
    }
}
export function runtime(id) {
    return (dispatch) => {
        fetch(URL + 'movie/' + id + '?api_key=' + APIKEY + '&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {

                dispatch({ type: MOVIER.OTHERDETAILS, payload: responseJson.runtime })
            })
            .catch((error) => {
                console.error(error);
            })
    }
}


export function gettingcast(id) {
    return (dispatch) => {
        fetch(URL + 'movie/' + id + '/credits?api_key=' + APIKEY + '')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: MOVIER.CAST, payload: responseJson.cast })
            })
            .catch((error) => {
                console.error(error);
            })
    }
}

export function gettingREBURE(id) {
    return (dispatch) => {
        fetch(URL + 'movie/' + id + '?api_key=' + APIKEY + '&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: MOVIER.REBURE, payload: responseJson })
            })
            .catch((error) => {
                console.error(erroe);
            })
    }
}

export function gettingcrew(id) {
    return (dispatch) => {
        fetch(URL + 'movie/' + id + '/credits?api_key=' + APIKEY + '')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: MOVIER.CREW, payload: responseJson.crew[0].name })
            })
            .catch((error) => {
                console.error(error);
            })
    }
}

export function gettingsimilarMovies(id) {
    return (dispatch) => {
        fetch(URL + 'movie/' + id + '/similar?api_key=' + APIKEY + '&language=en-US&page=1')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: MOVIER.SIMILARMOV, payload: responseJson.results })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function genress(id) {
    return (dispatch) => {
        fetch(URL + 'movie/' + id + '?api_key=' + APIKEY + '&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: MOVIER.GENRES, payload: responseJson.genres })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}





export function Discovernow(start = 1990, end = 2018, genis = 28, popdes = 'popularity.desc') {
    return (dispatch) => {
        fetch(URL + 'discover/movie?api_key=' + APIKEY + '&language=en-US&sort_by=' + popdes + '&include_adult=false&include_video=false&page=1&primary_release_date.gte=' + start + '&primary_release_date.lte=' + end + '&with_genres=' + genis)
            .then((response) => response.json())
            .then((responseJson) => {

                dispatch({ type: MOVIER.DISCOVERNOW, payload: responseJson })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

