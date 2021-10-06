
var apiUrl = "https://api.themoviedb.org/3/movie/now_playing?with_genres=" + 18 +"&reigon=840&language=en-US&api_key=9fb4cfc619ac245c369683b5ddd346ed"

fetch(apiUrl)
    .then(function (repsonse) {
        console.log(repsonse.json())
    })
    .then(function (data) {
        console.log(data);
    })