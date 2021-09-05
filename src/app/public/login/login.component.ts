import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public email = '';
  public password = '';
  public userFound = true;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}

  return(): void {
    this.router.navigate(['/home']);
  }

  checkUser(): void {
    const user = this.userService.getUserByMail(this.email);
    if (user.password !== this.password) {
      this.userFound = false;
      return;
    } else {
      user.password = '';
      localStorage.setItem('activeUser', JSON.stringify(user));
      if (user.role === 'admin') {
        this.router.navigate(['/homeAdministration']);
      } else {
        this.router.navigate(['/contemplationsMap']);
      }
    }
  }
}
