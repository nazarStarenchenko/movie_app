import { getMovies, displayFilms, search, API_KEY} from "./utils.js";

const SEARCHAPI =
  `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`;

const searchBar = document.getElementById("search-bar");
const searchBtn = document.getElementById("search-btn");

const darkModeButton = document.getElementById("day_night");
const dropdownMenuButton = document.getElementById("menu");
const dropdownMenuLinks = document.querySelector("nav");


function setTheme(themeObj) {
  if (themeObj.isDark === false) {
    document.documentElement.setAttribute("data-theme", "light"); 
    document.getElementById("day_night").innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 8a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"></path><path fill-rule="evenodd" d="M8.202.28a.25.25 0 00-.404 0l-.91 1.255a.25.25 0 01-.334.067L5.232.79a.25.25 0 00-.374.155l-.36 1.508a.25.25 0 01-.282.19l-1.532-.245a.25.25 0 00-.286.286l.244 1.532a.25.25 0 01-.189.282l-1.509.36a.25.25 0 00-.154.374l.812 1.322a.25.25 0 01-.067.333l-1.256.91a.25.25 0 000 .405l1.256.91a.25.25 0 01.067.334L.79 10.768a.25.25 0 00.154.374l1.51.36a.25.25 0 01.188.282l-.244 1.532a.25.25 0 00.286.286l1.532-.244a.25.25 0 01.282.189l.36 1.508a.25.25 0 00.374.155l1.322-.812a.25.25 0 01.333.067l.91 1.256a.25.25 0 00.405 0l.91-1.256a.25.25 0 01.334-.067l1.322.812a.25.25 0 00.374-.155l.36-1.508a.25.25 0 01.282-.19l1.532.245a.25.25 0 00.286-.286l-.244-1.532a.25.25 0 01.189-.282l1.508-.36a.25.25 0 00.155-.374l-.812-1.322a.25.25 0 01.067-.333l1.256-.91a.25.25 0 000-.405l-1.256-.91a.25.25 0 01-.067-.334l.812-1.322a.25.25 0 00-.155-.374l-1.508-.36a.25.25 0 01-.19-.282l.245-1.532a.25.25 0 00-.286-.286l-1.532.244a.25.25 0 01-.282-.189l-.36-1.508a.25.25 0 00-.374-.155l-1.322.812a.25.25 0 01-.333-.067L8.203.28zM8 2.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z" clip-rule="evenodd"></path></svg>'

  }else if (themeObj.isDark === true) {
    document.documentElement.setAttribute("data-theme", "dark"); 
    document.getElementById("day_night").innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.742,13.045c-0.677,0.18-1.376,0.271-2.077,0.271c-2.135,0-4.14-0.83-5.646-2.336c-2.008-2.008-2.799-4.967-2.064-7.723 c0.092-0.345-0.007-0.713-0.259-0.965C10.444,2.04,10.077,1.938,9.73,2.034C8.028,2.489,6.476,3.382,5.241,4.616 c-3.898,3.898-3.898,10.243,0,14.143c1.889,1.889,4.401,2.93,7.072,2.93c2.671,0,5.182-1.04,7.07-2.929 c1.236-1.237,2.13-2.791,2.583-4.491c0.092-0.345-0.008-0.713-0.26-0.965C21.454,13.051,21.085,12.951,20.742,13.045z M17.97,17.346c-1.511,1.511-3.52,2.343-5.656,2.343c-2.137,0-4.146-0.833-5.658-2.344c-3.118-3.119-3.118-8.195,0-11.314 c0.602-0.602,1.298-1.102,2.06-1.483c-0.222,2.885,0.814,5.772,2.89,7.848c2.068,2.069,4.927,3.12,7.848,2.891 C19.072,16.046,18.571,16.743,17.97,17.346z"></path></svg>'; 
  }
}

window.addEventListener('DOMContentLoaded', function () {
  let theme = localStorage.getItem('theme');
  if (theme) {
  } else {
    localStorage.setItem('theme', JSON.stringify({isDark: true}));
  }

  setTheme(JSON.parse(theme));
});

darkModeButton.addEventListener("click", () => {
  let themeObj = JSON.parse(localStorage.getItem("theme"));
  themeObj.isDark = !themeObj.isDark;
  setTheme(themeObj);
  localStorage.setItem("theme", JSON.stringify(themeObj));
});

dropdownMenuButton.addEventListener('click', (e) => {
  if (dropdownMenuLinks.classList.contains('closed')) {
    dropdownMenuLinks.classList.remove('closed')
  } else {
    dropdownMenuLinks.classList.add('closed')    
  }
})

searchBtn.addEventListener("click", () => {
  const searchTerm = searchBar.value;
  console.log(SEARCHAPI + searchTerm);
  search(SEARCHAPI + searchTerm);
  searchBar.value = "";
});


