
# GifsApp

## ViewChild

Decorador de Angular para tener referenciado el elemento HTML con el que quieres trabajar.

En el HTML:
```HTML:
<!-- Le añadimos tag para referenciarlo -->
<input
  #txtBuscar
  type="text"
  class="form-control"
  placeholder="Buscar gifs..."
  (keyup.enter)="buscar()"
>
```

En el componente:
```javascript:
@ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

buscar(){
  const valor = this.txtBuscar.nativeElement.value;
  this.gifService.buscarGifs(valor);

  this.txtBuscar.nativeElement.value = '';
}
```
Si usamos `txtBuscar` directamente sin el `nativeElement.value` estaríamos trabajando con todo el objeto de HTML.

## Servicios

Por defecto desde Angular 4, los servicios trabajan desde `root` por lo que no hay necesidad de importarlos en los _modules_
```javascript:
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifServiceService {

```

Para consumir el servicio, necesitas importarlo
```javascript:
export class SidebarComponent {

  constructor(private gifService: GifServiceService) { }

  get historial(): string[]{ // get que está en el servicio
    return this.gifService.historial; // recibimos el array de strings del historial
  }
```

