import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifServiceService {

  constructor() {}

  private _historial: string[] = [];

  get historial(){
    return [...this._historial];
  }

  buscarGifs( termino: string){

    // Trabajamos con minúsculas pero en el HTML tenemos un pipe con titlecase que deja el texto capitalizado
    termino = termino.trim().toLocaleLowerCase();

    // Si ya existe la entrada en el historial, no se inserta
    if (!this._historial.includes(termino)){
      this._historial.unshift(termino);
      this._historial = this._historial.splice(0,10);
      return;
    }

    console.log(this._historial);
  }
}
