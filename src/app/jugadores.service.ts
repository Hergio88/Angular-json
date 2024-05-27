import { Component, OnInit } from '@angular/core';
import { JugadoresService } from './jugadores.service';

@Component({
  selector: 'app-tu-componente',
  templateUrl: './tu-componente.component.html',
  styleUrls: ['./tu-componente.component.css']
})
export class TuComponente implements OnInit {
  jugadores: any[] = [];

  constructor(private jugadoresService: JugadoresService) { }

  ngOnInit(): void {
    this.jugadoresService.getJugadores().subscribe(data => {
      this.jugadores = data;
    });
  }
}
