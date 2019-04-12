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
  movies = [{
  	title: 'bat'
  }];

  constructor(private searchService: SearchService) { }

  searchForMovie(movieTitle){
  	this.searchService
  		.removeId()
  		.findByMoviesTitle(movieTitle)
		.then(res => this.movies = res.Search);
  }
  // findMovieDetails(movie){
  // 	this.searchService
  // 		.findMovieDetails(movie.imdbID)
  // 		.then(details => this.details = details)
  // }

  ngOnInit() {
  	this.searchService  	
  		.findAvatarMovies()
  		.then(res => this.movies = res.Search);
  	
  }

}
