
import { URL, APIKEY, TVS } from '../utils/types'

export function airingToday() {
    return (dispatch) => {
        fetch(URL + 'tv/airing_today?api_key=' + APIKEY + '&language=en-US&page=1')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: TVS.AIRING_TODAY, payload: responseJson.results })
            })
            .catch((error) => {
                console.error(error);
            });
    }

}

export function tvdetail(id) {
    return (dispatch) => {
        fetch(URL + 'tv/' + id + '?api_key=' + APIKEY + '&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: TVS.TVDETAILS, payload: responseJson.genres })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function tvimages(id) {
    return (dispatch) => {
        fetch(URL + 'tv/' + id + '/images?api_key=' + APIKEY + '&language=en-US&include_image_language=en')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('PICTURES', responseJson.backdrops)
                dispatch({ type: TVS.TVIMG, payload: responseJson.backdrops })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function getRat(id) {
    return (dispatch) => {
        fetch(URL + 'tv/' + id + '?api_key=' + APIKEY + '&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: TVS.GETRAT, payload: responseJson.vote_average })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function getfirstAir(id) {
    return (dispatch) => {
        fetch(URL + 'tv/' + id + '?api_key=' + APIKEY + '&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: TVS.GETFIRSTAIR, payload: responseJson.first_air_date })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function getlastAir(id) {
    return (dispatch) => {
        fetch(URL + 'tv/' + id + '?api_key=' + APIKEY + '&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: TVS.GETLASTAIR, payload: responseJson.last_air_date })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function getnet(id) {
    return (dispatch) => {
        fetch(URL + 'tv/' + id + '?api_key=' + APIKEY + '&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: TVS.GETNET, payload: responseJson.networks[0].name })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function getshowType(id) {
    return (dispatch) => {
        fetch(URL + 'tv/' + id + '?api_key=' + APIKEY + '&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: TVS.GETSHOWTYPE, payload: responseJson.type })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function getshowStat(id) {
    return (dispatch) => {
        fetch(URL + 'tv/' + id + '?api_key=' + APIKEY + '&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: TVS.GETSHOWSTAT, payload: responseJson.status })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function getCreator(id) {
    return (dispatch) => {
        fetch(URL + 'tv/' + id + '?api_key=' + APIKEY + '&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: TVS.GETCREATOR, payload: responseJson.created_by[0].name })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}



export function getsimilarTv(id) {
    return (dispatch) => {
        fetch(URL + 'tv/' + id + '/similar?api_key=' + APIKEY + '&language=en-US&page=1')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: TVS.SIMILARTV, payload: responseJson.results })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function gettingcasttv(id) {
    return (dispatch) => {
        fetch(URL + 'tv/' + id + '/credits?api_key=' + APIKEY + '&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: TVS.CASTTV, payload: responseJson.cast })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function runtimetv(id) {
    return (dispatch) => {
        fetch(URL + 'tv/' + id + '?api_key=' + APIKEY + '&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: TVS.RUNTV, payload: responseJson.episode_run_time })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}


export function gettvSeason(id) {
    return (dispatch) => {
        fetch(URL + 'tv/' + id + '/season/1?api_key=' + APIKEY + '&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: TVS.TVSEASON, payload: responseJson.episodes })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function getpopulartv() {
    return (dispatch) => {
        fetch(URL + 'tv/popular?api_key=' + APIKEY + '&language=en-US&page=1')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: TVS.POPULARTV, payload: responseJson.results })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function gettopratedtv() {
    return (dispatch) => {
        fetch(URL + 'tv/top_rated?api_key=' + APIKEY + '&language=en-US&page=1')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: TVS.TOPRATEDTV, payload: responseJson.results })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}

export function getOverview(id) {
    return (dispatch) => {
        fetch(URL + 'tv/' + id + '?api_key=' + APIKEY + '&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: TVS.OVER, payload: responseJson.overview })
            })
            .catch((error => {
                console.log(error);
            }))
    }
}