import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faSignInAlt,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  

  faSignInAlt = faSignInAlt;
  faUserPlus = faUserPlus;
  
  constructor(private router: Router) {}

  ngOnInit(): void {}

  login(): void {
    this.router.navigate(['/login']);
  }

  createAccount(): void {
    this.router.navigate(['/createAccount']);
  }
}
