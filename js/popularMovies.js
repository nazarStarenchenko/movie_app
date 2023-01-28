import { getMovies, displayFilms, API_KEY} from "./utils.js";

//possibly add the page
const APIURL =`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=`;
getMovies(APIURL, 1);

