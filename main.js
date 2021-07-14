window.addEventListener('scroll',function(){
  const header = document.querySelector('.navbar')
  header.classList.toggle("sticky", window.scrollY > 0)
});



const mobileBtn = document.getElementById('mobile-cta');
const nav = document.querySelector('nav');
const mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
  nav.classList.add('menu-btn');
})

mobileBtnExit.addEventListener('click', () => {
  nav.classList.remove('menu-btn');
})




// Scroll code for popular section

const slider = document.querySelector('.popular-movie-details');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});



// Scroll Code for Top Section
const slider2 = document.querySelector('.top-movie-details');

slider2.addEventListener('mousedown', (e) => {
  isDown = true;
  slider2.classList.add('active');
  startX = e.pageX - slider2.offsetLeft;
  scrollLeft = slider2.scrollLeft;
});
slider2.addEventListener('mouseleave', () => {
  isDown = false;
  slider2.classList.remove('active');
});
slider2.addEventListener('mouseup', () => {
  isDown = false;
  slider2.classList.remove('active');
});
slider2.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider2.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider2.scrollLeft = scrollLeft - walk;
  console.log(walk);
});


// Scroll Code for Trending Section
const slider3 = document.querySelector('.trending-movie-details');

slider3.addEventListener('mousedown', (e) => {
  isDown = true;
  slider3.classList.add('active');
  startX = e.pageX - slider3.offsetLeft;
  scrollLeft = slider3.scrollLeft;
});
slider3.addEventListener('mouseleave', () => {
  isDown = false;
  slider3.classList.remove('active');
});
slider3.addEventListener('mouseup', () => {
  isDown = false;
  slider3.classList.remove('active');
});
slider3.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider3.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider3.scrollLeft = scrollLeft - walk;
  console.log(walk);
});



const slider4 = document.querySelector('.now-movie-details');

slider4.addEventListener('mousedown', (e) => {
  isDown = true;
  slider4.classList.add('active');
  startX = e.pageX - slider4.offsetLeft;
  scrollLeft = slider4.scrollLeft;
});
slider4.addEventListener('mouseleave', () => {
  isDown = false;
  slider4.classList.remove('active');
});
slider4.addEventListener('mouseup', () => {
  isDown = false;
  slider4.classList.remove('active');
});
slider4.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider4.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider4.scrollLeft = scrollLeft - walk;
  console.log(walk);
});





const API_KEY = 'api_key=ca3c400cea4be5c8b127037bc0d6c555';
const BASE_URL = 'https://api.themoviedb.org/3';
const POPULAR_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&adult=false&' + API_KEY;
const TOP_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=ca3c400cea4be5c8b127037bc0d6c555&language=en-US';
// const TOP_URL = BASE_URL + '/discover/movie/?with_genres=18&original_language=en&certification_country=US&sort_by=popularity.desc&' + API_KEY ;
const TRENDING_URL = BASE_URL + '/discover/movie?with_genres=12&append_to_response=videos&sort_by=popularity.desc&adult=false&' + API_KEY;
const searchURL = BASE_URL + '/search/movie?' + API_KEY;
const NOW_PLAYING = 'http://api.themoviedb.org/3/movie/upcoming?api_key=ca3c400cea4be5c8b127037bc0d6c555'

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const FULL_MOVIE_CONTAINER = document.querySelector('.full-movie-container')
const POPULAR_MOVIES = document.querySelector('.popular-movie-details')
const TOP_MOVIES = document.querySelector('.top-movie-details')
const TRENDING_MOVIES = document.querySelector('.trending-movie-details')
const NOWPLAYING_MOVIES = document.querySelector('.now-movie-details')
const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const movieResultDiv = document.querySelector(".movie-container");
const container = document.querySelector(".container");
let listElement = document.querySelector("#search");
let inputBox = document.querySelector("#textBox")
let searchQuery = "";



// Function to fetch Popular Section and display on screen
getMovies(POPULAR_URL);

function getMovies(url){

  fetch(url).then(res => res.json()).then(data => {
    console.log(data);
    showMovies(data.results);
  })
}

function showMovies(data){

  POPULAR_MOVIES.innerHTML = '';

  data.forEach(movie => {
    const {id,title ,poster_path, vote_average, release_date} = movie;
    const movieEle = document.createElement('div');
    movieEle.classList.add('popular-movies');

    movieEle.innerHTML = `

    <div class="popular-inner-container">
    <div class="image">
      <img src="${IMG_URL+poster_path}" alt="">
    </div>

   <div class="movie-info-container">
   <div class="movie-info">
     <div class="movie-title">
       <h1>${title}</h1>
     </div>

     <div class="movie-rating">
      <img src="./images/star.png" alt="" />
       <p class="${getColor(vote_average)}">${vote_average}</p>
     </div>
   </div>
   </div> 

   <div class="movie-descrip-container">
     <div class="movie-descrip">
       <div class="movie-date">
       Released :<h1>${release_date.substring(0,4)}</h1>
       </div>

       <div class="movie-descrip-btn">
         <button href="" onclick="" data-movie-id="${movie.id}">Description</button>
       </div>
     </div>
     </div> 
    
  </div>
    
    `
    POPULAR_MOVIES.appendChild(movieEle);  

  })
}

// Function for rating color
function getColor(vote){
  if(vote>=8){
    return 'green'
  }
  else if(vote>=5){
    return 'orange'
  }
  else if(vote == 0){
    return 'gray';
  }
  else{
    return 'red'
  }
 
}


// Function to fetch top rated movies from api and display on screen
getMovies2(TOP_URL);

function getMovies2(url){

  fetch(url).then(res => res.json()).then(data => {
    console.log(data);
    showMovies2(data.results);
  })
}

function showMovies2(data){

  TOP_MOVIES.innerHTML = '';

  data.forEach(movie => {
    const {id,title ,poster_path, vote_average, release_date} = movie;
    const movieElement = document.createElement('div');
    movieElement.classList.add('top-movies');

    movieElement.innerHTML = `

    <div class="top-inner-container">
    <div class="image">
      <img src="${IMG_URL+poster_path}" alt="">
    </div>

   <div class="movie-info-container">
   <div class="movie-info">
     <div class="movie-title">
       <h1>${title}</h1>
     </div>

    <div class="movie-rating">
    <img src="./images/star.png" alt="" />
       <p class="${getColor(vote_average)}">${vote_average}</p>
     </div>
    </div>
   </div> 

   <div class="movie-descrip-container">
     <div class="movie-descrip">

   
       <div class="movie-date">
       Released :<h1>${release_date.substring(0,4)}</h1>
       </div>

       <div class="movie-descrip-btn">
         <button href="" onclick="" data-movie-id="${movie.id}">Description</button>
       </div>
     </div>
     </div> 
    
  </div>
    
    `
    TOP_MOVIES.appendChild(movieElement);   
  })

}



getNowPlayingMovies(NOW_PLAYING);

function getNowPlayingMovies(url){

  fetch(url).then(res => res.json()).then(data => {
    console.log(data);
    showMoviesNowPlaying(data.results);
  })
}

function showMoviesNowPlaying(data){

  NOWPLAYING_MOVIES.innerHTML = '';

  data.forEach(movie => {
    const {id,title,backdrop_path ,poster_path, vote_average, release_date} = movie;
    const movieElementnow = document.createElement('div');
    movieElementnow.classList.add('now-movies');

    movieElementnow.innerHTML = `

    <div class="now-inner-container">
               <div class="image">
                 <img src="${IMG_URL+poster_path}" alt="">
                
               </div>
               
             </div>
    
    `
    NOWPLAYING_MOVIES.appendChild(movieElementnow);

  })

}




// Function to fetch trending movies and display on the screen
getMovies3(TRENDING_URL);

function getMovies3(url){

  fetch(url).then(res => res.json()).then(data => {
    console.log(data);
    showMovies3(data.results);
  })
}

function showMovies3(data){

  TRENDING_MOVIES.innerHTML = '';

  data.forEach(movie => {
    const {id,title ,poster_path, vote_average, release_date} = movie;
    const movieElement1 = document.createElement('div');
    movieElement1.classList.add('trending-movies');

    movieElement1.innerHTML = `

    <div class="trending-inner-container">
               <div class="image">
                 <img src="${IMG_URL+poster_path}" alt="">
                
               </div>
  
              <div class="movie-info-container">
              <div class="movie-info">
                <div class="movie-title">
                  <h1>${title}</h1>
                </div>
                
                <div class="movie-rating">
                <img src="./images/star.png" alt="" />
                    <p class="${getColor(vote_average)}">${vote_average}</p>
                </div>
              </div>
              </div> 
  
              <div class="movie-descrip-container">
                <div class="movie-descrip">
                  <div class="movie-date">
                    Released :<h1>${release_date.substring(0,4)}</h1>
                  </div>
    
                  <div class="movie-descrip-btn">
                    <button href="" onclick="" data-movie-id="${movie.id}">Description</button>
                  </div>
                </div>
                </div> 
               
             </div>
    
    `
    TRENDING_MOVIES.appendChild(movieElement1);

  })

}



// Function for show search results
getMovies4();

function getMovies4(url){

  fetch(url).then(res => res.json()).then(data => {
    console.log(data);
    showMovies4(data.results);
  })
}

function showMovies4(data){

  searchResultDiv.innerHTML = '';

  data.forEach(movie => {
    const {id,title ,poster_path, vote_average, release_date} = movie;
    const movieElement2 = document.createElement('div');
    movieElement2.classList.add('search-movies');

    movieElement2.innerHTML = `

    <div class="search-inner-container">
    <div class="image">
      <img src="${IMG_URL+poster_path}" alt="">
    </div>

   <div class="movie-info-container">
   <div class="movie-info">
     <div class="movie-title">
       <h1>${title}</h1>
     </div>

     <div class="movie-rating">
     <img src="./images/star.png" alt="" />
       <p class="${getColor(vote_average)}">${vote_average}</p>
     </div>
   </div>
   </div> 

   <div class="movie-descrip-container">
     <div class="movie-descrip">
       <div class="movie-date">
       Released :<h1>${release_date.substring(0,4)}</h1>
       </div>

       <div class="movie-descrip-btn">
         <button href="" onclick="" data-movie-id="${movie.id}">Description</button>
       </div>
     </div>
     </div> 
    
  </div>
    
    `
    searchResultDiv.appendChild(movieElement2);

  })

}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
 
    const searchTerm = textBox.value;
    if(searchTerm){
      getMovies4(searchURL+'&query='+searchTerm)
    }
    
});


inputBox.addEventListener('keypress', function(e){
  if(e.key == 'Enter'){
      listElement.scrollIntoView();
      document.querySelector(".search-header-container").style.display = "flex";
  }
});



FULL_MOVIE_CONTAINER.onclick = function(event){
  event.preventDefault();
   
  const target = event.target;
  
  console.log(event);
  if(target.tagName.toLowerCase() === 'button'){
  
    
  const movieId = target.dataset.movieId;
  console.log("Movie Id:" , movieId);

 

  sessionStorage.setItem("movieId", movieId)
   window.location = "movie.html"; 
  }
  return false;
}

function generateUrl(path){
  const Url = `https://api.themoviedb.org/3${path}?api_key=ca3c400cea4be5c8b127037bc0d6c555`;
  return Url;
}


function createIframe(video){
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${video.key}`;
  iframe.width = 300;
  iframe.height = 300;
  iframe.allowFullscreen = true;

  return iframe;
}

function getMovies5(){
 
  let movieId = sessionStorage.getItem("movieId")
  const API_KEY = '?api_key=ca3c400cea4be5c8b127037bc0d6c555';
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const MOVIE_FILE = BASE_URL + movieId + API_KEY;
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  const path = `/movie/${movieId}/videos`
  const Url = generateUrl(path);
  
  
  fetch(Url).then(res => res.json()).then(data => {
    console.log("Videos:" ,data);

    const videos = data.results;
    const length = videos.length > 3 ? 3 : videos.length;
    const iframeContainer = document.createElement('div');
    const videoContentDiv = document.querySelector(".videoContentdiv")

    for(let i=0; i<length; i++){
      const video = videos[i];
      const iframe = createIframe(video);
      iframeContainer.appendChild(iframe);

      let generatedHTML =  `
      
      <div class="videoContentdiv">
        
      </div>
      `;
      videoContentDiv.innerHTML = generatedHTML;
      videoContentDiv.appendChild(iframeContainer);
    }

  })
  
  const movieResultDiv = document.querySelector(".movie-container");
  
  
  fetch(MOVIE_FILE).then(res => res.json()).then(data => {
    console.log(data);


    
    let movie = data;
    const poster_path = `${movie.poster_path}`;
    const title = `${movie.title}`;
    const vote_average = `${movie.vote_average}`;
  
    const overview= `${movie.overview}`;
    const release_date= `${movie.release_date}`;
    const runtime= `${movie.runtime}`;


    function time(runtime){
      var hours = Math.trunc(runtime/60);
      var minutes = runtime % 60;
      return (hours +"hr "+ minutes+"min");
      
    }
    time(runtime);


    
  const { genres=[] } = movie    
  const genresArr = [];
  genres.forEach((genre) => {
    if (genre.name) {
      genresArr.push(genre.name);
    }
  });
  const genre2 = genresArr.slice(0 , 3);
  


  let generatedHTML =  `
     
    <div class="movie-image">
        <img src="${IMG_URL+poster_path}" alt="">
       </div>
      <div class="movie-information-container">
       <div class="movie-information">
        <h1 class="title">${title}.</h1>
        <div class = "genres">
          <h1>Genres: </h1>
          <p>${genre2}.</h1>
        </div>
        
        <div class = "released">
          <h1>Released : </h1>
          <p>${release_date.substring(0 , 4)}.</h1>
        </div>

        <div class = "time">
          <h1>Runtime : </h1>
          <p>${time(runtime)}.</p>
        </div>

        <div class="rating">
          <h1>Rating : </h1>
          <img src="./images/star.png" alt="" />
          <p class="${getColor(vote_average)}">${vote_average}</p>
          <h2> / 10</h2>
        </div>
        
        <div class="overview">
          <h1>Overview :</h1>
          <p>${overview}</p>
        </div>
      </div> 
      </div>        
    `    
  movieResultDiv.innerHTML = generatedHTML;
 
  })
 
}




