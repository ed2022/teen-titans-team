
var apiUrl = "https://api.themoviedb.org/3/movie/now_playing?with_genres=" + 18 +"&reigon=840&language=en-US&api_key=9fb4cfc619ac245c369683b5ddd346ed"
var genres;

fetch(apiUrl)
    .then(function (response) {
        console.log(response.json())
    })
    .then(function (data) {
        console.log(data);
    })
fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=9fb4cfc619ac245c369683b5ddd346ed&language=en-US")
    .then(function (response) {
        return response.json()
    }) 
    .then(function (data) {
        console.log(data);
        genres = data.genres
        var string = "Drama"
       console.log(data.genres.find(function(genre) {
            if (genre.name === string) {
                return true
            } else return false
        }))

    })