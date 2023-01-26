const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById("main");
const searchBar = document.getElementById("search-bar");
const searchBtn = document.getElementById("search-btn");

// initially get fav movies
getMovies(APIURL);

async function getMovies(url) {
  const resp = await fetch(url);
  const respData = await resp.json();

  displayFilms(respData.results);
}

function displayFilms(movies) {
    // clear main
    main.innerHTML = "";
    console.log(movies);
    movies.forEach((movie) => {
        const { poster_path, original_title, vote_average, overview } = movie;

        const movieEl = document.createElement("div");
        movieEl.setAttribute("class", "film");

        movieEl.innerHTML = `
            <div class="img-wrapper">
              <img src="${IMGPATH + poster_path}" alt="${original_title}">
            </div>
            <h3>${original_title}</h3>
            <p>Rating: ${vote_average}</p>
            <h4>Overview:</h4>
            <p>${overview}</p>
        `;

        main.appendChild(movieEl);
    });
}

window.addEventListener('DOMWindowLoaded', displayFilms);

searchBtn.addEventListener("click", () => {
  const searchTerm = searchBar.value;
  getMovies(SEARCHAPI + searchTerm);
  search.value = "";
});

