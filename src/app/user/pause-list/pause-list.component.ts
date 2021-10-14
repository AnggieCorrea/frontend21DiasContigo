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
    },
    {
      nombre: '2',
      completado: 'true',
      deshabilitado: 'false',
    },
    {
      nombre: '3',
      completado: 'true',
      deshabilitado: 'false',
    },
    {
      nombre: '4',
      completado: 'true',
      deshabilitado: 'false',
    },
    {
      nombre: '5',
      completado: 'true',
      deshabilitado: 'false',
    },
    {
      nombre: '6',
      completado: 'true',
      deshabilitado: 'false',
    },
    {
      nombre: '7',
      completado: 'true',
      deshabilitado: 'false',
    },
    {
      nombre: '8',
      completado: 'true',
      deshabilitado: 'false',
    },
    {
      nombre: '9',
      completado: 'false',
      deshabilitado: 'false',
    },
    {
      nombre: '10',
      completado: 'false',
      deshabilitado: 'true',
    },
    {
      nombre: '11',
      completado: 'false',
      deshabilitado: 'true',
    },
    {
      nombre: '12',
      completado: 'false',
      deshabilitado: 'true',
    },
    {
      nombre: '13',
      completado: 'false',
      deshabilitado: 'true',
    },
    {
      nombre: '14',
      completado: 'false',
      deshabilitado: 'true',
    },
    {
      nombre: '15',
      completado: 'false',
      deshabilitado: 'true',
    },
    {
      nombre: '16',
      completado: 'false',
      deshabilitado: 'true',
    },
    {
      nombre: '17',
      completado: 'false',
      deshabilitado: 'true',
    },
    {
      nombre: '18',
      completado: 'false',
      deshabilitado: 'true',
    },
    {
      nombre: '19',
      completado: 'false',
      deshabilitado: 'true',
    },
    {
      nombre: '20',
      completado: 'false',
      deshabilitado: 'true',
    },
    {
      nombre: '21',
      completado: 'false',
      deshabilitado: 'true',
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
