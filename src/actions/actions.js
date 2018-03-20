

const apiRoot = 'https://api.themoviedb.org/3/movie/';
const apiKey = '9a2955322d7a5fbef5b01d4e52abc0ff';
export const ERROR = 'ERROR';
export const NOWPLAYING = 'NOWPLAYING';
export const TOPBOXOFFICE = 'TOPBOXOFFICE'

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