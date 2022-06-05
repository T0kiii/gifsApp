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
    this._historial.unshift(termino);
    console.log(this._historial);
  }
}
