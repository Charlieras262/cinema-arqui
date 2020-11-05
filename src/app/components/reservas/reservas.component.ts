import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from 'src/app/services/general/general.service';
import { SesionesService } from 'src/app/services/sesiones/sesiones.service';

declare var $: any;

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  reserva = { sesion: {}, asientos: [] };
  sesiones: any

  constructor(
    public generalService: GeneralService,
    public sesionService: SesionesService,
    public rutaActiva: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getSesiones();
  }

  getSesiones(){
    this.sesionService.getSesiones(this.rutaActiva.snapshot.params.id).subscribe(res => {
      const resp = JSON.parse(JSON.stringify(res));
      this.sesiones = resp.sesiones;
    });
  }

  asientoStatus(event) {
    const group = event.path[2].id;
    const nodeSelected = $(`#${event.path[0].id}`);
    const value = nodeSelected[0].innerText;

    this.reserva.asientos.push({ group, value });

    nodeSelected.toggleClass('asientoLibre').toggleClass('asientoOcupado');
  }

  guardarReserva() {
    this.reserva.sesion = this.sesiones[parseInt($('#sesion').val())];
    console.log(this.reserva.sesion);
    this.generalService.Swal(
      'Correcto',
      `Su reserva fue realizada con exito. <br> 
      Precio Unitario: Q34.00 <br> 
      Cantidad de Asientos: ${this.reserva.asientos.length} <br> 
      Horario: ${this.reserva.sesion.horario} <br>
      Resolucion: ${this.reserva.sesion.resolucion} <br> 
      Pelicula: ${this.reserva.sesion.pelicula.nombre} <br> 
      Total a Pagar: Q${this.reserva.asientos.length * 34}.00 <br> 
      Sala: ${this.reserva.sesion.sala.nombre}`,
      'success'
    );
  }

  cancelar() {
    window.location.reload();
  }
}
