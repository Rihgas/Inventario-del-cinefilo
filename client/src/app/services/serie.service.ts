import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from '../models/serie';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  url_api = 'http://127.0.0.1:3000/api/series';

  constructor(private http: HttpClient) { }

  getSeries(): Observable<any> {
    return this.http.get(this.url_api);
  }
  
  getSerie(id: string): Observable<any> {
    return this.http.get(`${this.url_api}/${id}`)
  }

  postSerie(serie: Serie): Observable<any> {
    return this.http.post(this.url_api, serie)
  }

  putSerie(id: string, serie: Serie): Observable<any> {
    return this.http.put(`${this.url_api}/${id}`, serie)
  }

  deleteSerie(id: any): Observable<any> {
    return this.http.delete(`${this.url_api}/${id}`)
  }
}
