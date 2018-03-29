export const SIMILARTV = 'SIMILARTV';
export const CASTTV = 'CASTTV';
export const RUNTV = 'RUNTV';
export const TVDETAILS = 'TVDETAILS';
export const TVIMG = 'TVIMG';
export const GETRAT = 'GETRAT';
export const GETFIRSTAIR = 'GETFIRSTAIR';
export const GETLASTAIR = 'GETLASTAIR';
export const GETNET = 'GETNET';
export const GETSHOWTYPE = 'GETSHOWTYPE';
export const GETSHOWSTAT = 'GETSHOWSTAT';
export const GETCREATOR = 'GETCREATOR';
export const TOPRATEDTV = 'TOPRATEDTV';
export const TVSEASON = 'TVSEASON';
export const AIRING_TODAY = 'AIRING_TODAY';
export const POPULARTV = 'POPULARTV';

export function airingToday() {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&page=1')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: AIRING_TODAY, payload: responseJson.results })
            })
            .catch((error) => {
                console.error(error);
            });
    }

}

export function tvdetail(id) {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/tv/' + id + '?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: TVDETAILS, payload: responseJson.genres })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function tvimages(id) {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/tv/' + id + '/images?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&include_image_language=en')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('PICTURES', responseJson.backdrops)
                dispatch({ type: TVIMG, payload: responseJson.backdrops })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function getRat(id) {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/tv/' + id + '?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: GETRAT, payload: responseJson.vote_average })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function getfirstAir(id) {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/tv/' + id + '?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: GETFIRSTAIR, payload: responseJson.first_air_date })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function getlastAir(id) {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/tv/' + id + '?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: GETLASTAIR, payload: responseJson.last_air_date })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function getnet(id) {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/tv/' + id + '?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: GETNET, payload: responseJson.networks[0].name })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function getshowType(id) {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/tv/' + id + '?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: GETSHOWTYPE, payload: responseJson.type })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function getshowStat(id) {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/tv/' + id + '?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: GETSHOWSTAT, payload: responseJson.status })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function getCreator(id) {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/tv/' + id + '?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: GETCREATOR, payload: responseJson.created_by[0].name })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}



export function getsimilarTv(id) {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/tv/' + id + '/similar?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&page=1')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: SIMILARTV, payload: responseJson.results })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function gettingcasttv(id) {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/tv/' + id + '/credits?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: CASTTV, payload: responseJson.cast })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function runtimetv(id) {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/tv/' + id + '?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: RUNTV, payload: responseJson.episode_run_time })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}


export function gettvSeason(id) {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/tv/' + id + '/season/1?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: TVSEASON, payload: responseJson.episodes })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function getpopulartv() {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&page=1')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: POPULARTV, payload: responseJson.results })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function gettopratedtv() {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&page=1')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: TOPRATEDTV, payload: responseJson.results })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}




