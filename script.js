var genreSubmitBttn = document.getElementById("submit-genre");
var genreList = document.getElementById("genre-list");

var moviePoster = document.getElementById("movie-poster");
var movieTitle = document.getElementById("movie-name");
var movieDescription = document.getElementById("movie-description");
var movieReleaseDate = document.getElementById("movie-release-date");
var movieRating = document.getElementById("movie-rating");
var movieLang = document.getElementById("movie-language");

var nextButton = document.getElementById("next-movie");
var prevButton = document.getElementById("previous-movie");
var current = 0;
var genreSelection = "";

function getApiCallOne(){
    
    if(genreList.value !== genreSelection) {
        current = 0;
    }

    genreSelection = genreList.value

    var apiUrl = "https://api.themoviedb.org/3/movie/now_playing?with_genres=" + genreSelection +"&reigon=840&language=en-US&api_key=9fb4cfc619ac245c369683b5ddd346ed"
    

    fetch(apiUrl)
        .then(function (repsonse) {
            return repsonse.json()
        })
        .then(function (data) {
            console.log(data)
            // current = 0
            console.log(current)
            displayInfo(data)
            

        })
}
function displayInfo(data) {
    var posterPath = "https://image.tmdb.org/t/p/original/" + data.results[current].poster_path;
    moviePoster.setAttribute("src", posterPath);
    movieTitle.innerHTML = data.results[current].original_title;
    movieDescription.innerHTML = data.results[current].overview;
    movieReleaseDate.innerHTML = data.results[current].release_date;
    movieRating.innerHTML = data.results[current].vote_average;
    movieLang.innerHTML = data.results[current].original_language;
}
function nextMovie() {
    current++
    getApiCallOne();
}
function prevMovie() {
    current--
    getApiCallOne();
}

prevButton.addEventListener("click", prevMovie);
nextButton.addEventListener("click", nextMovie);
genreSubmitBttn.addEventListener("click", getApiCallOne);