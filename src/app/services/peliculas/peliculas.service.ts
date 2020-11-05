import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  readonly API_URL = environment.serverLocation + 'api/peliculas';

  constructor(
    public http: HttpClient
  ) { }

  getPleiculas() {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.API_URL, { headers: headers });
  }
  
  getPelicula(id){
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(`${this.API_URL}/${id}`, { headers: headers });
  }
}
