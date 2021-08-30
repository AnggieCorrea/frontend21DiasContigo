import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contemplation-consideration-list',
  templateUrl: './contemplation-consideration-list.component.html',
  styleUrls: ['./contemplation-consideration-list.component.scss'],
})
export class ContemplationConsiderationListComponent implements OnInit {
  /* */
  contemplaciones: any[] = [];

  constructor() {
    this.contemplaciones = Array.from(Array(21).keys()).map((numeroDia) => {
      return {
        nombre: `Día ${numeroDia}`,
        titulo: `Título`,
        fecha: `${numeroDia}/sept/2021`,
      };
    });
  }

  ngOnInit(): void {}
}
