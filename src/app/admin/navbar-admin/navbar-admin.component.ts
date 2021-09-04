import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.scss'],
})
export class NavbarAdminComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  contemplationsAdministration(): void {
    this.router.navigate(['/contemplationsAdministration']);
  }

  pausesAdministration(): void {
    this.router.navigate(['/pausesAdministration']);
  }
}
