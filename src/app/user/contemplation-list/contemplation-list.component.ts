import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-contemplation-list',
  templateUrl: './contemplation-list.component.html',
  styleUrls: ['./contemplation-list.component.scss'],
})
export class ContemplationListComponent implements OnInit {
  contemplaciones: any[] = [];
  rows: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router /*private contemplationMap: MapService*/
  ) {
    this.contemplaciones = Array.from(Array(3).keys()).map((numeroDia) => {
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

  ngOnInit(): void {}

  navSpiritualExcercise(dia: string) {
    this.router.navigate(['/spiritualExcercise']);
  }
}
