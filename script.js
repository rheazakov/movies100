const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=27cce8dda57d4682e97a5c311d19c986&page=';
const API_key = '27ccce8dda57d4682e97a5c311d19c986';
const image_url='https://image.tmdb.org/t/p/w500/';
var pageNumber = 1;
const moviepage=document.querySelector('#moviepage');
(function() {
    window.pageNumber = 1;
    getMovies();
 
 })();
 function getMovies() {
    fetch(url + window.pageNumber)
    .then((res) => res.json())
    .then((data)=> {
        const movies=data.results;
        const movieBlock = createMovieContainer(movies);
        moviepage.appendChild(movieBlock);
        console.log('Data:', data);
    })
    .catch((error) =>{
        console.log('Error:',error);
    })
}
function createMovieContainer(movies){
    const movieElement=document.createElement('section');
    movieElement.setAttribute('class','movie');

    const movieTemplate=`
    <section class="section">
    ${movieSection(movies)}
    </section>
    `;


movieElement.innerHTML=movieTemplate;
return movieElement;
}
function movieSection(movies){
    return movies.map((movie) => {
        return `
          <img class="column movie-picture" src= ${image_url + movie.poster_path} data-movie-id=${movie.id} onclick="displayMovie(${movie.id})"/>
        `;
     })
}
 function setPageActive(pageId) {
    window.pageNumber = pageId;
    document.getElementById('moviepage').innerHTML = '';
    document.querySelector('.active').classList.remove('active');
    document.getElementById('page-' + pageId).classList.add('active');
    getMovies();
}
function displayMovie(movieId) {
    window.open('movieDetails.htm?movieId=' + movieId)
}

