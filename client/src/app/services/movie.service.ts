import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url_api = 'http://127.0.0.1:3000/api/peliculas'

  constructor(private http:HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get(this.url_api);
  }
  
  getMovie(id: string): Observable<any> {
    return this.http.get(`${this.url_api}/${id}`)
  }

  postMovie(movie: Movie): Observable<any> {
    return this.http.post(this.url_api, movie)
  }

  putMovie(id: string, movie: Movie): Observable<any> {
    return this.http.put(`${this.url_api}/${id}`, movie)
  }

  deleteMovie(id: any): Observable<any> {
    return this.http.delete(`${this.url_api}/${id}`)
  }
}
