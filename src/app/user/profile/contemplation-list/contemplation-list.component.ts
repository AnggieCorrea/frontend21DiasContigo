import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-contemplation-list',
  templateUrl: './contemplation-list.component.html',
  styleUrls: ['./contemplation-list.component.scss'],
})
export class UserContemplationListComponent implements OnInit {
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
