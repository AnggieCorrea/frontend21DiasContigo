import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContemplationConsideration } from 'src/app/models/ContemplationConsideration';
import { PauseConsideration } from 'src/app/models/PauseConsideration';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  listIdsCompletedExercises: number[] = [];
  pauseConsiderationList: PauseConsideration[] = [];
  contemplationConsiderationList: ContemplationConsideration[] = [];
  user: User = new User(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    'user',
    '',
    this.listIdsCompletedExercises,
    this.pauseConsiderationList,
    this.contemplationConsiderationList
  );

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.user);
  }

  public createAccount(): void {
    var gender;
    var element = <HTMLInputElement>document.getElementById('femaleGender');
    var isChecked = element.checked;
    if (isChecked) {
      gender = 'Mujer';
    }
    element = <HTMLInputElement>document.getElementById('maleGender');
    isChecked = element.checked;
    if (isChecked) {
      gender = 'Hombre';
    }
    this.user.setName(
      (document.getElementById('name') as HTMLInputElement).value
    );
    this.user.setLastName(
      (document.getElementById('lastName') as HTMLInputElement).value
    );
    this.user.setEmail(
      (document.getElementById('email') as HTMLInputElement).value
    );
    this.user.setCity(
      (document.getElementById('city') as HTMLInputElement).value
    );
    this.user.setCountry(
      (document.getElementById('country') as HTMLInputElement).value
    );
    this.user.setPassword(
      (document.getElementById('city') as HTMLInputElement).value
    );
    this.user.setGender(gender);

    console.log(this.user);

    // tslint:disable-next-line: deprecation
    this.userService.addUser(this.user).subscribe(
      (result) => {
        console.log(result);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public return(): void {
    this.router.navigate(['/login']);
  }
}
