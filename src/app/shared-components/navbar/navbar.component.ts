import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  navContemplationMap(): void{
    this.router.navigate(['/contemplationsMap'])
  }
  navPauseMap(): void{
    this.router.navigate(['/pauseMap'])
  }
  navPerfil(): void{
    this.router.navigate(['/profile'])
  }
  navSettings(): void{
    this.router.navigate(['/settings'])
  }

}
