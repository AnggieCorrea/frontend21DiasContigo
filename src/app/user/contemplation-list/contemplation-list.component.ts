import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContTileMapService } from 'src/app/services/cont-tile-map.service';

@Component({
  selector: 'app-contemplation-list',
  templateUrl: './contemplation-list.component.html',
  styleUrls: ['./contemplation-list.component.scss'],
})
export class ContemplationListComponent implements OnInit {
  contemplaciones = [
    {
      nombre: '1',
      completado: 'true',
      deshabilitado: 'false',
      even: 'false',
      column: '1',
    },
    {
      nombre: '2',
      completado: 'true',
      deshabilitado: 'false',
      even: 'true',
      column: '1',
    },
    {
      nombre: '3',
      completado: 'true',
      deshabilitado: 'false',
      even: 'false',
      column: '1',
    },
    {
      nombre: '4',
      completado: 'true',
      deshabilitado: 'false',
      even: 'true',
      column: '1',
    },
    {
      nombre: '5',
      completado: 'true',
      deshabilitado: 'false',
      even: 'false',
      column: '1',
    },
    {
      nombre: '6',
      completado: 'true',
      deshabilitado: 'false',
      even: 'true',
      column: '1',
    },
    {
      nombre: '7',
      completado: 'true',
      deshabilitado: 'false',
      even: 'false',
      column: '1',
    },
    {
      nombre: '8',
      completado: 'true',
      deshabilitado: 'false',
      even: 'true',
      column: '2',
    },
    {
      nombre: '9',
      completado: 'false',
      deshabilitado: 'false',
      even: 'false',
      column: '2',
    },
    {
      nombre: '10',
      completado: 'false',
      deshabilitado: 'true',
      even: 'true',
      column: '2',
    },
    {
      nombre: '11',
      completado: 'false',
      deshabilitado: 'true',
      even: 'false',
      column: '2',
    },
    {
      nombre: '12',
      completado: 'false',
      deshabilitado: 'true',
      even: 'true',
      column: '2',
    },
    {
      nombre: '13',
      completado: 'false',
      deshabilitado: 'true',
      even: 'false',
      column: '2',
    },
    {
      nombre: '14',
      completado: 'false',
      deshabilitado: 'true',
      even: 'true',
      column: '2',
    },
    {
      nombre: '15',
      completado: 'false',
      deshabilitado: 'true',
      even: 'false',
      column: '3',
    },
    {
      nombre: '16',
      completado: 'false',
      deshabilitado: 'true',
      even: 'true',
      column: '3',
    },
    {
      nombre: '17',
      completado: 'false',
      deshabilitado: 'true',
      even: 'false',
      column: '3',
    },
    {
      nombre: '18',
      completado: 'false',
      deshabilitado: 'true',
      even: 'true',
      column: '3',
    },
    {
      nombre: '19',
      completado: 'false',
      deshabilitado: 'true',
      even: 'false',
      column: '3',
    },
    {
      nombre: '20',
      completado: 'false',
      deshabilitado: 'true',
      even: 'true',
      column: '3',
    },
    {
      nombre: '21',
      completado: 'false',
      deshabilitado: 'true',
      even: 'false',
      column: '3',
    },
  ];
  rows: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router /*private contemplationMap: MapService*/,
    private _contTileMap: ContTileMapService
  ) {
    _contTileMap.cargar();
  }

  ngOnInit(): void {}

  navSpiritualExcercise(dia: string) {
    this.router.navigate(['/spiritualExcercise']);
  }
}
