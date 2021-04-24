import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  usersArray:any = [];
  
  constructor(private _http: HttpClient) { }
  
  search(keyword:string): Observable<any> {
    return this._http.get(`https://wookie.codesubmit.io/movies?q=` + keyword )
  }
  
  
}




// getMovies(): Observable<any> {
//   return this._http.get(`https://wookie.codesubmit.io/movies`)
// }