import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SesionesService {

  readonly API_URL = environment.serverLocation + 'api/sesiones';

  constructor(
    public http: HttpClient
  ) { }

  getSesiones(id) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(`${this.API_URL}/${id}`, { headers: headers });
  }
}
