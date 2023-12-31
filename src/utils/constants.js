export const NF_BG_IMG = "https://w0.peakpx.com/wallpaper/663/269/HD-wallpaper-movie-poster-poster-collage-movie-cg.jpg";
export const NF_LOGO_IMG = "https://i.pinimg.com/474x/da/eb/a2/daeba2a95770ed1a685be74327083470.jpg";
export const NF_USER_IMG = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";
export const API_OPTIONS= {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY,
    }
  };
export const VIDEOS_LINK = 'https://api.themoviedb.org/3/movie/';
export const POSTER_LINK = "https://image.tmdb.org/t/p/w500";
export const PLAYING_NOW = 'https://api.themoviedb.org/3/movie/now_playing';
export const POPULAR_MOVIES = 'https://api.themoviedb.org/3/movie/popular';
export const TOP_RATED = 'https://api.themoviedb.org/3/movie/top_rated';
export const UPCOMING = 'https://api.themoviedb.org/3/movie/upcoming';
export const DISCOVER = 'https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&page=1&sort_by=popularity.desc';

export const SUPPORTED_LANG = [{identifier:"English" , name:"English"},
{identifier:"Hindi" , name:"हिंदी"},
{identifier:"French" , name:"French"}]

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
export const SEARCH_MOVIE = 'https://api.themoviedb.org/3/search/movie?query=';
export const PROMPT = "Act as a movie recommendation system. If the query enclosed in ``` delimiters is a genuine query asking for movie suggestions, then provide 5 movie names based on query strictly in form of a comma seperated list. Read the query thoroughly, even if the user enters a single word e.g.[Horror] , if it is a movie genere , then return the response in above mentioned manner. If the query is not a genuine query that asks for movie suggestions then return []. ```";