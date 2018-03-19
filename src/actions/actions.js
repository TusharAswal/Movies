const apiRoot = 'https://api.themoviedb.org/3/movie/';
const apiKey = '9a2955322d7a5fbef5b01d4e52abc0ff';
export const ERROR = 'ERROR';
export const NOWPLAYING = 'NOWPLAYING';

export function nowPlaying(lang = 'en-US', page = 1) {
    return (dispatch) => {
        //https://api.themoviedb.org/3/movie/now_playing?api_key=720474c3e42189e4e9381b59360765d5&language=en-US&page=5
        url = apiRoot + 'now_playing?api_key=' + apiKey + '&language=' + lang + '&page=' + page;
        //       console.log(url=='https://api.themoviedb.org/3/movie/now_playing?api_key=720474c3e42189e4e9381b59360765d5&language=en-US&page=1');
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("data : ", responseJson.results);
                data = responseJson.results;
                dispatch({ type: NOWPLAYING, paylaod: data })
            })
            .catch(function (error) {
                console.log('There has been a problem with your fetch operation: ' + error);
                dispatch({ type: ERROR, paylaod: error });
            });
    }
}