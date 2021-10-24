import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContTileMapService } from 'src/app/services/cont-tile-map.service';

@Component({
  selector: 'app-pause-list',
  templateUrl: './pause-list.component.html',
  styleUrls: ['./pause-list.component.scss'],
})
export class PauseListComponent implements OnInit {
  pausas = [
    {
      nombre: '1',
      completado: 'true',
      deshabilitado: 'false',
      even: 'top',
      column: '1',
    },
    {
      nombre: '2',
      completado: 'true',
      deshabilitado: 'false',
      even: 'mid',
      column: '1',
    },
    {
      nombre: '3',
      completado: 'true',
      deshabilitado: 'false',
      even: 'bot',
      column: '1',
    },
    {
      nombre: '4',
      completado: 'true',
      deshabilitado: 'false',
      even: 'bot',
      column: '2',
    },
    {
      nombre: '5',
      completado: 'true',
      deshabilitado: 'false',
      even: 'mid',
      column: '2',
    },
    {
      nombre: '6',
      completado: 'true',
      deshabilitado: 'false',
      even: 'top',
      column: '2',
    },
    {
      nombre: '7',
      completado: 'true',
      deshabilitado: 'false',
      even: 'top',
      column: '1',
    },
    {
      nombre: '8',
      completado: 'true',
      deshabilitado: 'false',
      even: 'mid',
      column: '1',
    },
    {
      nombre: '9',
      completado: 'false',
      deshabilitado: 'false',
      even: 'bot',
      column: '1',
    },
    {
      nombre: '10',
      completado: 'false',
      deshabilitado: 'true',
      even: 'bot',
      column: '2',
    },
    {
      nombre: '11',
      completado: 'false',
      deshabilitado: 'true',
      even: 'mid',
      column: '2',
    },
    {
      nombre: '12',
      completado: 'false',
      deshabilitado: 'true',
      even: 'top',
      column: '2',
    },
    {
      nombre: '13',
      completado: 'false',
      deshabilitado: 'true',
      even: 'top',
      column: '1',
    },
    {
      nombre: '14',
      completado: 'false',
      deshabilitado: 'true',
      even: 'mid',
      column: '1',
    },
    {
      nombre: '15',
      completado: 'false',
      deshabilitado: 'true',
      even: 'bot',
      column: '1',
    },
    {
      nombre: '16',
      completado: 'false',
      deshabilitado: 'true',
      even: 'bot',
      column: '2',
    },
    {
      nombre: '17',
      completado: 'false',
      deshabilitado: 'true',
      even: 'mid',
      column: '2',
    },
    {
      nombre: '18',
      completado: 'false',
      deshabilitado: 'true',
      even: 'top',
      column: '2',
    },
    {
      nombre: '19',
      completado: 'false',
      deshabilitado: 'true',
      even: 'top',
      column: '1',
    },
    {
      nombre: '20',
      completado: 'false',
      deshabilitado: 'true',
      even: 'mid',
      column: '1',
    },
    {
      nombre: '21',
      completado: 'false',
      deshabilitado: 'true',
      even: 'bot',
      column: '1',
    },
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router /*private contemplationMap: MapService*/,
    private _pauseTileMap: ContTileMapService
  ) {
    _pauseTileMap.cargar();
  }

  ngOnInit(): void {}

  navSpiritualExcercise(dia: string) {
    this.router.navigate(['/pauseExcercise']);
  }
}
