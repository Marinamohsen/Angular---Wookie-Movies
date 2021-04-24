import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MoviesInterceptor } from './interceptors/movies.interceptor';

import { MovieCardComponent } from './main/movie-card/movie-card.component';
import { FilterPipe } from './pipe-filters/filter.pipe';
import { NavComponent } from './shared/nav/nav.component';
import { SingleMovieComponent } from './main/single-movie/single-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    FilterPipe,
    NavComponent,
    SingleMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: MoviesInterceptor,
    multi:true 
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
