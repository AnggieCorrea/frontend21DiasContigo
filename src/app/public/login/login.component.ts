import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { communicationActiveUser } from 'src/app/services/communicationActiveUser.service';
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
  userF: User;

  constructor(private router: Router, private userService: UserService, private _communicationActiveUser: communicationActiveUser) {}

  ngOnInit(): void {}

  return(): void {
    this.router.navigate(['/landing']);
  }

  checkUser(): void {
    this.user = new User("","","",this.password,"","","",this.email,"","",[],[],[]);
    console.log(this.email);
    console.log(this.password);
    this.userService.getUserByEmail(this.user).subscribe((userFound: User) => {
      this.userF = userFound;
      if (this.userF.email != "") {
        console.log(this.userF.role)
        if (this.userF.role === 'admin') {
          this.router.navigate(['/homeAdministration']);
        } else if (this.userF.role === 'user') {
          this.router.navigate(['/home']);
          console.log(this.userF);
          this._communicationActiveUser.setUserId(this.userF._id);
        }
      } else {
        this.userFound = false;
        console.log('Usuario no registrado');
      }
    });
  }

  
}
