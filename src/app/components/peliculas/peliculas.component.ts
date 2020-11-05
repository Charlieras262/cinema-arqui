import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  pelicula: any;
  constructor(
    public peliculasService: PeliculasService,
    public rutaActiva: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.peliculasService.getPelicula(this.rutaActiva.snapshot.params.id).subscribe(res => {
      this.pelicula = JSON.parse(JSON.stringify(res)).pelicula
    });
  }
}
