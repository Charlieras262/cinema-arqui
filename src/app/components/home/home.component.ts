import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  peliculas: [];

  constructor(
    public peliculasService: PeliculasService
  ) { }

  ngOnInit(): void {
    this.getPeliculas()
  }

  getPeliculas(){
    this.peliculasService.getPleiculas().subscribe(res => {
      const resp = JSON.parse(JSON.stringify(res));
      this.peliculas = this.splitArray(resp.peliculas, 3);
      console.log(JSON.stringify(resp.peliculas))
    });
  }

  splitArray(array, chunkSize) {
    return [].concat.apply([],
      array.map((elem, i) => {
        return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
      })
    );
  }
}
