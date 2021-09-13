import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pause-list',
  templateUrl: './pause-list.component.html',
  styleUrls: ['./pause-list.component.scss'],
})
export class PauseListComponent implements OnInit {
  pausas: any[] = [];
  rows: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router /*private contemplationMap: MapService*/
  ) {
    if (window.matchMedia('(max-width:1045px)').matches) {
      this.pausas = Array.from(Array(7).keys()).map((numeroDia) => {
        return {
          nombre: `${numeroDia + 1}`,
        };
      });
      this.rows = Array.from(Array(3).keys()).map((numeroDia) => {
        return {
          nombre: `${numeroDia + 1}`,
        };
      });
    } else {
      this.pausas = Array.from(Array(3).keys()).map((numeroDia) => {
        return {
          nombre: `${numeroDia + 1}`,
        };
      });
      this.rows = Array.from(Array(7).keys()).map((numeroDia) => {
        return {
          nombre: `${numeroDia + 1}`,
        };
      });
    }
  }

  ngOnInit(): void {}

  navSpiritualExcercise(dia: string) {
    this.router.navigate(['/spiritualExcercise']);
  }
}
