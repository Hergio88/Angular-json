import { Component, OnInit } from '@angular/core';
import { JugadoresService } from './jugadores.service';

@Component({
  standalone: true, // Agrega esta línea
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  jugadores: any[] = [];

  constructor(private jugadoresService: JugadoresService) {}

  ngOnInit(): void {
    this.jugadoresService.getJugadores().subscribe(data => {
      this.jugadores = data;
    });
  }
}
