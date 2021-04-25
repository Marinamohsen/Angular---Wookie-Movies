import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search-service/search.service';
import { IMovie } from '../../interfaces/interface'
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies-service/moviesservice.service';


@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {

  movie: IMovie | null = null
  id: string = ''
  

  constructor( private moviesService: MoviesService , private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    

    this.route.params.subscribe(params => {
      this.id = params['movieId'];

      this.moviesService.getMovies().subscribe(res => {
        const movies = res?.movies
        this.movie = movies.find((movie: IMovie) => movie.id === this.id)
     });
 
    });

  }
}

