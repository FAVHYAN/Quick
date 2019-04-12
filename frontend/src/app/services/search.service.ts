import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  removeId(){
	  document.getElementById("content-Boxes").removeAttribute("id"); 
  }
  radio(type){
  	if(type == 'Movie'){
  		console.log(1);
  	}else{  		
  		console.log(2);
  	}
  }
  findByMoviesTitle(title){
  	console.log(movieTitle);
  	return fetch('http://www.omdbapi.com/?s='+title+'&apikey=966ec030')
  		.then(response => response.json())
  }

  findAllMovies(){
  	return fetch('http://www.omdbapi.com/?s=all&apikey=966ec030')
  		.then(response => response.json())
  }

}
