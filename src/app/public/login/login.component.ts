import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  userFound = true;
  user: User;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}

  return(): void {
    this.router.navigate(['/landing']);
  }

  checkUser(): void {
    this.userService.getUserByEmail(this.email).subscribe((userFound: User) => {
      console.log(userFound);
      this.user = userFound;
      if (this.user.getPassword() == this.password) {
        if (this.user.role === 'admin') {
          this.router.navigate(['/homeAdministration']);
        } else if (this.user.role === 'user') {
          this.router.navigate(['/home']);
        }
      } else {
        this.userFound = false;
        console.log('Usuario no registrado');
      }
    });
  }
}
