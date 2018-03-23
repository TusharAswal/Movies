

const apiRoot = 'https://api.themoviedb.org/3/movie/';
const apiKey = '9a2955322d7a5fbef5b01d4e52abc0ff';
export const ERROR = 'ERROR';
export const NOWPLAYING = 'NOWPLAYING';
export const TOPBOXOFFICE = 'TOPBOXOFFICE';
export const AIRING_TODAY = 'AIRING_TODAY';
export const UPCOMING = 'UPCOMING';
export const POPULAR = 'POPULAR';
export const MOVIE_DETAILS = 'MOVIE_DETAILS';
export const OTHERDETAILS = 'OTHERDETAILS';
export const CAST = 'CAST';
export const REBURE = 'REBURE';
export const CREW = 'CREW';
export const SIMILARMOV = 'SIMILARMOV';
export const GENRES = 'GENRES';
export const TVDETAILS = 'TVDETAILS';
export const TVIMG = 'TVIMG';

export function nowPlaying(lang = 'en-US', page = 1) {
    return (dispatch) => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&page=1')
            .then((response) => response.json())
            .then((responseJson) => {
                //console.log("RESULTS ARE HERE",responseJson.results);  
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
            //console.log("data: ",responseJson.results);
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

export function moviedetails(id) {
    return(dispatch) => {
        fetch('https://api.themoviedb.org/3/movie/'+ id +'/images?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&include_image_language=en')
        .then((response)=> response.json())
        .then((responseJson)=>{
            //console.log("MDETAIILS",responseJson.posters)
            dispatch({type:MOVIE_DETAILS, payload:responseJson.posters})
        })
        .catch((error)=>{
            console.error(error);
        })
    }
}


export function runtime(id) {
    return(dispatch) => {
        fetch('https://api.themoviedb.org/3/movie/'+ id +'?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
        .then((response)=> response.json())
        .then((responseJson)=>{
           console.log("GENERES DETAILS",responseJson.runtime)
            dispatch({type:OTHERDETAILS, payload:responseJson.runtime})
        })
        .catch((error)=>{
            console.error(error);
        })
    }
}

export function gettingcast(id) {
    return(dispatch) => {
        fetch('https://api.themoviedb.org/3/movie/'+ id +'/credits?api_key=9a2955322d7a5fbef5b01d4e52abc0ff')
        .then((response) => response.json())
        .then((responseJson)=> {
            //console.log("Getting Crew",responseJson.cast)
            dispatch({type:CAST, payload:responseJson.cast})
        })
        .catch((error)=> {
            console.error(error);
        })
    }
}

export function gettingREBURE(id) {
    return(dispatch) => {
        fetch('https://api.themoviedb.org/3/movie/'+ id +'?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
        .then((response)=> response.json())
        .then((responseJson)=> {
            //console.log('getting rebure',responseJson.release_date)
            dispatch({type:REBURE, payload:responseJson})
        })
        .catch((error)=>{
            console.error(erroe);
        })
    }
}

export function gettingcrew(id) {
    return(dispatch) => {
        fetch('https://api.themoviedb.org/3/movie/'+ id +'/credits?api_key=9a2955322d7a5fbef5b01d4e52abc0ff')
        .then((response) => response.json())
        .then((responseJson)=> {
            //console.log("Getting Crew",responseJson.crew)
            dispatch({type:CREW, payload:responseJson.crew[0].name})
        })
        .catch((error)=> {
            console.error(error);
        })
    }
}

export function gettingsimilarMovies(id) {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/movie/'+ id +'/similar?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&page=1')
        .then((response)=> response.json())
        .then((responseJson)=>{
            console.log('SIMILAR MOVIES',responseJson.results)
            dispatch({type:SIMILARMOV, payload:responseJson.results})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

export function genress(id) {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/movie/'+ id +'?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
        .then((response)=> response.json())
        .then((responseJson)=>{
           console.log('generes ss',responseJson.genres)
            dispatch({type:GENRES, payload:responseJson.genres})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

export function tvdetail(id) {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/tv/'+ id +'?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
        .then((response)=> response.json())
        .then((responseJson)=>{
           console.log('generes ss',responseJson.genres)
            dispatch({type:TVDETAILS, payload:responseJson.genres})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

export function tvimages(id) {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/tv/'+ id +'/images?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&include_image_language=en')
        .then((response)=> response.json())
        .then((responseJson)=>{
           //console.log('generes ss',responseJson.genres)
            dispatch({type:TVIMG, payload:responseJson.backdrops})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}