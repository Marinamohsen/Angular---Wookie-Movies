import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService  {

  
  constructor(private _http: HttpClient) { 
  }

  getMovies(): Observable<any> {
    return this._http.get(`https://wookie.codesubmit.io/movies`)
  }


}


