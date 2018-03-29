export const ERROR = 'ERROR';
export const NOWPLAYING = 'NOWPLAYING';
export const TOPBOXOFFICE = 'TOPBOXOFFICE';
export const UPCOMING = 'UPCOMING';
export const POPULAR = 'POPULAR';
export const MOVIE_DETAILS = 'MOVIE_DETAILS';
export const OTHERDETAILS = 'OTHERDETAILS';
export const CAST = 'CAST';
export const REBURE = 'REBURE';
export const CREW = 'CREW';
export const SIMILARMOV = 'SIMILARMOV';
export const GENRES = 'GENRES';
export const OVER = 'OVER';
export const DISCOVERNOW = 'DISCOVERNOW';

export function nowPlaying(lang = 'en-US', page = 1) {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&page=1')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: NOWPLAYING, payload: responseJson.results })
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

export function topBoxoffice() {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&page=1')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: TOPBOXOFFICE, payload: responseJson.results })
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

export function upcoming() {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&page=1')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: UPCOMING, payload: responseJson.results })

            })

            .catch((error) => {
                console.error(error);
            });
    }
}

export function popular() {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&page=1')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: POPULAR, payload: responseJson.results })
            })

            .catch((error) => {
                console.error(error);
            })
    }
}

export function moviedetails(id) {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/movie/' + id + '/images?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&include_image_language=en')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("posters",responseJson.posters)
                dispatch({ type: MOVIE_DETAILS, payload: responseJson.posters })
            })
            .catch((error) => {
                console.error(error);
            })
    }
}
export function runtime(id) {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {

                dispatch({ type: OTHERDETAILS, payload: responseJson.runtime })
            })
            .catch((error) => {
                console.error(error);
            })
    }
}


export function gettingcast(id) {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=9a2955322d7a5fbef5b01d4e52abc0ff')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: CAST, payload: responseJson.cast })
            })
            .catch((error) => {
                console.error(error);
            })
    }
}

export function gettingREBURE(id) {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: REBURE, payload: responseJson })
            })
            .catch((error) => {
                console.error(erroe);
            })
    }
}

export function gettingcrew(id) {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=9a2955322d7a5fbef5b01d4e52abc0ff')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: CREW, payload: responseJson.crew[0].name })
            })
            .catch((error) => {
                console.error(error);
            })
    }
}

export function gettingsimilarMovies(id) {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/movie/' + id + '/similar?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&page=1')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: SIMILARMOV, payload: responseJson.results })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function genress(id) {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: GENRES, payload: responseJson.genres })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}





export function Discovernow(start = 1990, end = 2018, genis = 28, popdes = 'popularity.desc') {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&sort_by=' + popdes + '&include_adult=false&include_video=false&page=1&primary_release_date.gte=' + start + '&primary_release_date.lte=' + end + '&with_genres=' + genis)
            .then((response) => response.json())
            .then((responseJson) => {

                dispatch({ type: DISCOVERNOW, payload: responseJson })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

