import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  title = 'Movies & series';
  movieTitle;
  details = {};
  movies = {};

  constructor(private searchService: SearchService) { }

  searchForMovie(movieTitle){
  	console.log(movieTitle);
  	this.searchService
  		.removeId()
  		.findByMoviesTitle(movieTitle)
		.then(res => this.movies = res.Search);
  }
  findMovieDetails(movie){
  	this.searchService
  		.findMovieDetails(movie.imdbID)
  		.then(details => this.details = details)
  }
  typeWatch(type){
  	console.log(type);
  	this.searchService
  		.radio(type)
  		.then(details => this.details = Search)
  }
  ngOnInit() {
  	this.searchService  	
  		.findAllMovies()
  		.then(res => this.movies = res.Search);
  	
  }

}
