// console.log('task 1')
// settimneout (()=>{

//     console.log('blank data')
// })

// console.log('fetching data')

let api = "https://www.omdbapi.com/?apikey=83fd7607&t= ";

// fetch("https://www.omdbapi.com/?apikey=83fd7607&t=").then((data)=>{
//     return data.json()
// }).then((data)=>{
//    console.log(data)
// })

let title = document.getElementById('title');
let date = document.getElementById('date');
let plot = document.getElementById('plot');
let actor = document.getElementById('actors');
let director = document.getElementById('director');
let genre = document.getElementById('genre');
let collection = document.getElementById('collection');
let poster = document.getElementById('poster');
let awards = document.getElementById('awards');
let rating = document.getElementById('ratings');
let writer = document.getElementById('writer');



function searchmovie() {
  let movieInput = document.getElementById("movieInput");
  let url = api + movieName.value;

  fetch(url )
    .then((data) => {
      return data.json();
    })
    .then((data) => {
        title.innerText = data.Title;
        date.innerText = data.Released;
        plot.innerText = data.Plot;
        director.innerText = data.Director;
        actor.innerText = data.Actors;
        genre.innerText = data.Genre;
        collection.innerText = data.BoxOffice;
        rating.innerText = data.imdbRating;
        writer.innerText = data.Writer;
        awards.innerText = data.Awards;
        poster.src = data.Poster;
    });
  
}

