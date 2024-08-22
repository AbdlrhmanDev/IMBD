'use strict';

import { imageBaseURL } from "./api.js";


/**
 * movie card
 */

export function createMovieCard(movie) {

  const {
    poster_path,
    title,
    vote_average,
    release_date,
    id,
    results
  } = movie;

  const card = document.createElement("div");
  card.classList.add("movie-card");
  function updateCardContent() {
  card.innerHTML = `
    <figure class="poster-box card-banner">
      <img src="${imageBaseURL}w342${poster_path}" alt="${title}" class="img-cover" loading="lazy">
    </figure>
    
    <h4 class="title">${title}</h4>
    
    <div class="meta-list">
      <div class="meta-item">
        <img src="./assets/images/star.png" width="20" height="20" loading="lazy" alt="rating">
    
        <span class="star ${getColor(vote_average)}">${vote_average}</span>
                    <span class="rate ms-3">Rate</span>

      </div>
    
      <div class="card-badge">${release_date.split("-")[0]}</div>
    </div>
    
    <a href="./detail.html" class="card-btn" title="${title}" onclick="getMovieDetail(${id})"></a> 

     
    







  `
}

updateCardContent();
setInterval(updateCardContent(), 10000);


  return card;
}



//color RAting 
function getColor(vote) {
  if(vote>= 8){
      return 'green'
  }else if(vote >= 5){
      return "orange"
  }else{
      return 'red'
  }
}



