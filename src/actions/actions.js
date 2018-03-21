

const apiRoot = 'https://api.themoviedb.org/3/movie/';
const apiKey = '9a2955322d7a5fbef5b01d4e52abc0ff';
export const ERROR = 'ERROR';
export const NOWPLAYING = 'NOWPLAYING';
export const TOPBOXOFFICE = 'TOPBOXOFFICE';
export const AIRING_TODAY = 'AIRING_TODAY';
export const UPCOMING = 'UPCOMING';
export const POPULAR = 'POPULAR';

export function nowPlaying(lang = 'en-US', page = 1) {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&page=1')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.results);  
                dispatch({type: NOWPLAYING, payload:responseJson.results})
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

export function topBoxoffice() {
    return(dispatch)=> {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&page=1')
        .then((response)=> response.json())
        .then((responseJson) => {
            dispatch({type: TOPBOXOFFICE, payload:responseJson.results})
        })
        .catch((error) =>{
            console.error(error);
        });
    }
}

export function airingToday() {
    return(dispatch) => {
        fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&page=1')
        .then((response)=> response.json())
        .then((responseJson)=> {
            dispatch({type: AIRING_TODAY, payload:responseJson.results})
        })
        .catch((error)=>{
            console.error(error);
        });
    }

}

export function upcoming() {
    return(dispatch) => {
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&page=1')
        .then((response)=> response.json())
        .then((responseJson)=> {
            console.log("data: ",responseJson.results);
            dispatch({type: UPCOMING, payload:responseJson.results})
        
        })
        
        .catch((error)=> {
            console.error(error);
        });
    }
}

export function popular() {
    return(dispatch) => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&page=1')
        .then((response)=> response.json())
        .then((responseJson)=> {
            dispatch({type: POPULAR , payload:responseJson.results})
        })

        .catch((error)=>{
            console.error(error);
        })
    }
}