import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  user: User;
  name: string = '';
  lastName: string = '';
  email: string = '';
  gender: string = '';
  city: string = '';
  country: string = '';
  password: string = '';
  urlImage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  public createAccount(): void {
    var element = <HTMLInputElement>document.getElementById('femaleGender');
    var isChecked = element.checked;
    if (isChecked) {
      this.gender = 'Mujer';
    }
    element = <HTMLInputElement>document.getElementById('maleGender');
    isChecked = element.checked;
    if (isChecked) {
      this.gender = 'Hombre';
    }
    this.user = new User(
      this.name,
      this.lastName,
      this.password,
      this.gender,
      this.country,
      this.city,
      this.email,
      'user',
      '',
      [],
      [],
      []
    );
    this.userService.addUser(this.user);
    this.router.navigate(['/login']);
  }

  public return(): void {
    this.router.navigate(['/login']);
  }
}
