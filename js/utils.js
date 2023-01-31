const main = document.getElementById("main");
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

export async function getMovies(url, numberOfPages) {
  if (numberOfPages === 0) {
    const resp = await fetch(url);
    const respData = await resp.json();
    displayFilms(respData);

  } else if (numberOfPages >= 0) {
    for (let i = 0; i < numberOfPages; i++) {
      const resp = await fetch(url + numberOfPages);
      const respData = await resp.json();
      displayFilms(respData);
    }
  }
}

export function displayFilms(movies) {
    if (Array.isArray(movies.results)) {
      movies.results.forEach((movie) => addMovieToDom(movie, main));
    } else if (isObject(movies)) {
      console.log(movies);
      addMovieToDom(movies, main);
    }
    
}

export async function search(url) {
  main.innerHTML = "";
  const resp = await fetch(url);
  const respData = await resp.json(); 
  respData.results.forEach((movie) => addMovieToDom(movie, main));
}

function addMovieToDom(movie, elementToAppendTo) {
        const { poster_path, original_title, vote_average, overview } = movie;
        let path;
        if (poster_path == null) {
          path = "../static/placeholder.png";
        } else {
          path = IMGPATH + poster_path;
        }
        const movieEl = document.createElement("div");
        movieEl.setAttribute("class", "film");

        movieEl.innerHTML = `
            <div class="img-wrapper">
              <img src="${path}" alt="${original_title}">
            </div>
            <h3>${original_title}</h3>
            <p>Rating: ${vote_average}</p>
            <h4>Overview:</h4>
            <p>${overview}</p>
        `;

        elementToAppendTo.appendChild(movieEl);
}

function isObject(value) {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value)
  );
}

export const API_KEY = "04c35731a5ee918f014970082a0088b1";