import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  removeId(){
	  document.getElementById("content-Boxes").removeAttribute("id"); 
  }
  findByMoviesTitle(title){
  	return fetch('http://www.omdbapi.com/?s='+title+'&apikey=966ec030')
  		.then(response => response.json())
  }

  findAvatarMovies(){
  	return fetch('http://www.omdbapi.com/?s=avatar&apikey=966ec030')
  		.then(response => response.json())
  }

}
