import { Component, OnInit } from '@angular/core';
import { GifServiceService } from 'src/app/gifs/services/gif-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // Traemos el servicio para consumirlo
  constructor(private gifService: GifServiceService) { }

  ngOnInit(): void {
  }

  // get que está en el servicio
  get historial(): string[]{
    // recibimos el array de strings del historial
    return this.gifService.historial;
  }

}
