import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  constructor(private router: Router /*, private user: UserService*/) {}

  ngOnInit(): void {}

  login(): void {
    this.router.navigate(['/login']);
  }

  createAccount(): void {
    this.router.navigate(['/createAccount']);
  }
}
