import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contemplation-list',
  templateUrl: './contemplation-list.component.html',
  styleUrls: ['./contemplation-list.component.scss']
})
export class ContemplationListComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private router: Router) {}

  ngOnInit(): void {
  }

  navSpiritualExcercise(dia:string){
    this.router.navigate(['/spiritualExcercise'])
  }
}
