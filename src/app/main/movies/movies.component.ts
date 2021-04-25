import { Component, OnInit } from '@angular/core';
import {  IMovie } from 'src/app/interfaces/interface';
import { MoviesService } from 'src/app/services/movies-service/moviesservice.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  movies: IMovie[] = []
  filteredMovies: IMovie[] = []
  genres: string[] = ['all']
  selectedCategorey: string = ''
  selectedGenre: string = 'all'
  ngOnInit(): void {
     
    this.moviesService.getMovies().subscribe(res => {
      this.movies = this.filteredMovies = res.movies

      this.getGenres()
      console.log(this.movies)
    });
  }


  getGenres(): void {
    this.movies.forEach((movie: IMovie) => {
      let generes = movie.genres

      generes.forEach((genere: string )=> {
        if (!this.genres.includes(genere)) {
          this.genres.push(genere)
        }
      });

    })
  }


  filterGenre(genre: string) {
    this.selectedGenre = genre;
    if (this.selectedGenre === 'all') {
      this.filteredMovies = this.movies
    } else {
      this.filteredMovies = this.movies.filter((movie: IMovie) => {        
        return movie.genres.includes(this.selectedGenre)
      })
    }
    }



}
