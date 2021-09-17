import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stadistics',
  templateUrl: './stadistics.component.html',
  styleUrls: ['./stadistics.component.scss'],
})
export class StadisticsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
