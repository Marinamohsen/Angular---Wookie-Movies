import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { MoviesService } from '../../services/movies-service/moviesservice.service';
import { IMovie } from '../../interfaces/interface'

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  
  movies: IMovie[] = []

 
  constructor( private moviesService: MoviesService) { }
  
  ngOnInit(): void {

    this.moviesService.getMovies().subscribe(res => {
      this.movies = res.movies

      console.log(this.movies)
    });
  

  }
}

