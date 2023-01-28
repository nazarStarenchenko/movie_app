import { getMovies, displayFilms, API_KEY} from "./utils.js";

//possibly add the page
const APIURL =`https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US`;
getMovies(APIURL, 0);
	