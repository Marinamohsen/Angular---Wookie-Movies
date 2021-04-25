import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { MoviesService } from '../../services/movies-service/moviesservice.service';
import { IMovie } from '../../interfaces/interface'
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  
  @Input() movie: IMovie | null = null
  
  constructor( private moviesService: MoviesService , private router: Router) { }
  
  ngOnInit(): void {

    
    
  }

  singleMovie(id: string) {      
    this.router.navigate(['/movies/' + id]);
  }  

}

