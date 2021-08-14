import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  return(): void {
    this.router.navigate(['/home'])
  }

  checkUser(): void {
    //implementar logica
    this.router.navigate(['/contemplationsMap'])
  }

}
