import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifServiceService } from '../services/gif-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  // Traemos el servicio para consumirlo
  constructor( private gifService: GifServiceService) { }

  ngOnInit(): void {
  }

  // Decorador de Angular para tener referenciado el elemento HTML con el que quieres trabajar.
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  buscar(){
    const valor = this.txtBuscar.nativeElement.value;
    this.gifService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = '';
    // Si usamos `txtBuscar` directamente, estaríamos trabajando con todo el objeto de HTML
  }
}
