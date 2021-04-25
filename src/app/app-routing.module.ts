import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { MovieCardComponent } from './main/movie-card/movie-card.component';
import { SingleMovieComponent } from './main/single-movie/single-movie.component'
import { SearchComponent } from './main/search/search.component'
import { MoviesComponent } from './main/movies/movies.component';

const routes: Routes = [
  { path: "", component: MoviesComponent },
  { path: "movies/:movieId", component: SingleMovieComponent },
  { path: "search/:keyword", component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
