import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pause-consideration-list',
  templateUrl: './pause-consideration-list.component.html',
  styleUrls: ['./pause-consideration-list.component.scss'],
})
export class PauseConsiderationListComponent implements OnInit {
  pauses: any[] = [];

  constructor() {
    this.pauses = Array.from(Array(21).keys()).map((numeroDia) => {
      return {
        nombre: `Día ${numeroDia + 1}`,
        titulo: `Título`,
        fecha: `${numeroDia + 1}/sept/2021`,
      };
    });
  }

  ngOnInit(): void {}
}
