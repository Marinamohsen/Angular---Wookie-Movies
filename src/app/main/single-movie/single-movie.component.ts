import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search-service/search.service';
import { IMovie } from '../../interfaces/interface'


@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {

  movies: IMovie[] = []

  constructor( private SearchService: SearchService) { }
  
  ngOnInit(): void {

    // this.SearchService.search(keyword: string).subscribe(res => {
    //   this.movies = res.movies

    //   console.log(this.movies)
    // });
  
    

  }
}

