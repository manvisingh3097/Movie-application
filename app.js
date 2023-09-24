// console.log('task 1')
// settimneout (()=>{

//     console.log('blank data')
// })

// console.log('fetching data')

let api = "http://www.omdbapi.com/?apikey=83fd7607&=dangal";

fetch(api).then((data)=>{
    return data.json()
}).then((data)=>{
    console.log(data)
})

let title = document.getElementById('title')
let data = document.getElementById('data')
let plot = document.getElementById('plot')
let actor = document.getElementById('actor')
let director = document.getElementById('director')
let genre = document.getElementById('genre')
let collection = document.getElementById('collection')
let poster = document.getElementById('poster')
let award = document.getElementById('award')
let rating = document.getElementById('rating')



function searchmovie() {
  let movieinput = document.getElementById("movieinput");
  let url = api + movieinput.value;

  fetch(api)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
        title.innerText = data.title;
        data.innerText = data.data;
        plot.innerText = data.plot;
        actor.innerText = data.actor;
        director.innerText = data.director;
        genre.innerText = data.genre;
        poster.innerText = data.poster;
        award.innerText = data.award;
        collection.innerText = data.collection;

    });
  console.log(url);
}
