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
export const GETRAT = 'GETRAT';
export const GETFIRSTAIR = 'GETFIRSTAIR';
export const GETLASTAIR ='GETLASTAIR';
export const GETNET = 'GETNET';
export const GETSHOWTYPE ='GETSHOWTYPE';
export const GETSHOWSTAT= 'GETSHOWSTAT';
export const GETCREATOR = 'GETCREATOR';
export const OVER = 'OVER';
export const SIMILARTV ='SIMILARTV';
export const CASTTV ='CASTTV';
export const RUNTV = 'RUNTV';
export const POPULAR_PEOPLE = 'POPULAR_PEOPLE';
export const TVSEASON = 'TVSEASON';
export const POPULARTV ='POPULARTV';
export const TOPRATEDTV = 'TOPRATEDTV';
export const SEARCHMOVIE = 'SEARCHMOVIE';
export const SEARCHTV ='SEARCHTV';
export const SEARCH_PEOPLE='SEARCH_PEOPLE';
export const PEOPLE_DETAIL ='PEOPLE_DETAIL';
export const PERS_DETAIL ='PERS_DETAIL';
export const PERS_IMG = 'PERS_IMG';
export const WORKIN = 'WORKIN';
export const WORKINTV = 'WORKINTV';
export const ALLGENRES= 'ALLGENRES';
export const ALLGENRES1= 'ALLGENRES1';
export const CONTENTIS= 'CONTENTIS';

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
           //console.log("GENERES DETAILS",responseJson.runtime)
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
            //console.log('SIMILAR MOVIES',responseJson.results)
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
           //console.log('generes ss',responseJson.genres)
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
         // console.log('generes ss',responseJson)
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
           console.log('PICTURES',responseJson.backdrops)
            dispatch({type:TVIMG, payload:responseJson.backdrops})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

export function getRat(id) {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/tv/'+ id +'?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
        .then((response)=> response.json())
        .then((responseJson)=>{
          
            dispatch({type:GETRAT, payload:responseJson.vote_average})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

export function getfirstAir(id) {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/tv/'+ id +'?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
        .then((response)=> response.json())
        .then((responseJson)=>{
         // console.log('generes ss',responseJson.vote_average)
            dispatch({type:GETFIRSTAIR, payload:responseJson.first_air_date})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

export function getlastAir(id) {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/tv/'+ id +'?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
        .then((response)=> response.json())
        .then((responseJson)=>{
         // console.log('generes ss',responseJson.vote_average)
            dispatch({type:GETLASTAIR, payload:responseJson.last_air_date})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

export function getnet(id) {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/tv/'+ id +'?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
        .then((response)=> response.json())
        .then((responseJson)=>{
         //console.log('NETWORK',responseJson.networks[0].name)
            dispatch({type:GETNET, payload:responseJson.networks[0].name})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

export function getshowType(id) {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/tv/'+ id +'?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
        .then((response)=> response.json())
        .then((responseJson)=>{
         // console.log('generes ss',responseJson.vote_average)
            dispatch({type:GETSHOWTYPE, payload:responseJson.type})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

export function getshowStat(id) {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/tv/'+ id +'?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
        .then((response)=> response.json())
        .then((responseJson)=>{
         // console.log('generes ss',responseJson.vote_average)
            dispatch({type:GETSHOWSTAT, payload:responseJson.status})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

export function getCreator(id) {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/tv/'+ id +'?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
        .then((response)=> response.json())
        .then((responseJson)=>{
         //console.log('NETWORK',responseJson.networks[0].name)
            dispatch({type:GETCREATOR, payload:responseJson.created_by[0].name})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

export function getOverview(id) {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/tv/'+ id +'?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
        .then((response)=> response.json())
        .then((responseJson)=>{
         // console.log('generes ss',responseJson)
            dispatch({type:OVER, payload:responseJson.overview})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

export function getsimilarTv(id) {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/tv/'+ id +'/similar?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&page=1')
        .then((response)=> response.json())
        .then((responseJson)=>{
        // console.log('Similar Tv',responseJson.results)
            dispatch({type:SIMILARTV, payload:responseJson.results})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

export function gettingcasttv(id) {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/tv/'+ id +'/credits?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
        .then((response)=> response.json())
        .then((responseJson)=>{
        // console.log('Similar Tv',responseJson.cast)
            dispatch({type:CASTTV, payload:responseJson.cast})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

export function runtimetv(id) {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/tv/'+ id +'?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
        .then((response)=> response.json())
        .then((responseJson)=>{
        // console.log('Similar Tv',responseJson.episode_run_time)
            dispatch({type:RUNTV, payload:responseJson.episode_run_time})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

export function getpopularPeople(id) {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/person/popular?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&page=1')
        .then((response)=> response.json())
        .then((responseJson)=>{
        // console.log('Similar Tv',responseJson.episode_run_time)
            dispatch({type:POPULAR_PEOPLE, payload:responseJson.results})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

export function gettvSeason(id) {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/tv/'+ id +'/season/1?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
        .then((response)=> response.json())
        .then((responseJson)=>{
       // console.log('SEASON @@',responseJson.episodes)
            dispatch({type:TVSEASON, payload:responseJson.episodes})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

export function getpopulartv() {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&page=1')
        .then((response)=> response.json())
        .then((responseJson)=>{
       // console.log('SEASON @@',responseJson.episodes)
            dispatch({type:POPULARTV, payload:responseJson.results})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

export function gettopratedtv() {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&page=1')
        .then((response)=> response.json())
        .then((responseJson)=>{
       // console.log('SEASON @@',responseJson.episodes)
            dispatch({type:TOPRATEDTV, payload:responseJson.results})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

export function searchmovie(moviename) {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/search/movie?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&query='+ moviename +'&page=1&include_adult=false')
        .then((response)=> response.json())
        .then((responseJson)=>{
     
            dispatch({type:SEARCHMOVIE, payload:responseJson.results})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

export function searchtv(tvname) {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/search/movie?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&query='+ tvname +'&page=1&include_adult=false')
        .then((response)=> response.json())
        .then((responseJson)=>{
     //console.log('SEARCHING FOR TV ',responseJson.results)
            dispatch({type:SEARCHTV, payload:responseJson.results})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

export function searchname(name) {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/search/person?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&query='+ name +'&page=1&include_adult=false')
        .then((response)=> response.json())
        .then((responseJson)=>{
     //console.log('SEARCHING FOR TV ',responseJson.results)
            dispatch({type:SEARCH_PEOPLE, payload:responseJson.results})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

export function getcelebdetails(id) {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/person/'+ id +'?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
        .then((response)=> response.json())
        .then((responseJson)=>{
    // console.log('SEARCHING FOR PEOPLE DETAIL',responseJson)
            dispatch({type:PEOPLE_DETAIL, payload:responseJson})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

export function getpersonaldetails(id) {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/person/'+ id +'?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
        .then((response)=> response.json())
        .then((responseJson)=>{
    // console.log('SEARCHING FOR PEOPLE DETAIL',responseJson)
            dispatch({type:PERS_DETAIL, payload:responseJson})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

export function getpersonalimg(id) {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/person/'+ id +'/images?api_key=9a2955322d7a5fbef5b01d4e52abc0ff')
        .then((response)=> response.json())
        .then((responseJson)=>{
  
            dispatch({type:PERS_IMG, payload:responseJson.profiles})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

export function getworkinmovies(id) {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/person/'+ id +'/movie_credits?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
        .then((response)=> response.json())
        .then((responseJson)=>{
   //  console.log('SEARCHING FOR PEOPLE cast',responseJson.cast)
            dispatch({type:WORKIN, payload:responseJson.cast})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

export function getworkintv(id) {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/person/'+ id +'/tv_credits?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
        .then((response)=> response.json())
        .then((responseJson)=>{
     //console.log('SEARCHING FOR PEOPLE cast',responseJson.cast)
            dispatch({type:WORKINTV, payload:responseJson.cast})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

export function getallgenres(sy,ey,gen) {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte='+ sy +'&release_date.lte='+ ey +'&with_genres='+ gen)
        .then((response)=> response.json())
        .then((responseJson)=>{
   console.log('SEARCHING FOR All ffiltered data',responseJson.id)
            dispatch({type:ALLGENRES, payload:responseJson})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

export function getallgenres1() {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US')
        .then((response)=> response.json())
        .then((responseJson)=>{
   //console.log('SEARCHING FOR Allgeneres',responseJson)
            dispatch({type:ALLGENRES1, payload:responseJson})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

export function getcontent(from,to,gen) {
    return(dispatch)=>{
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte='+ from +'&primary_release_date.lte='+ to +'&with_genres='+gen)
        .then((response)=> response.json())
        .then((responseJson)=>{
   console.log('SEARCHING FOR FILTERS',responseJson)
            dispatch({type:CONTENTIS, payload:responseJson})
        })
        .catch((error=> {
            console.log(error);
        }))
    }
}

