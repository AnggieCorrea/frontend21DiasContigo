import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  faHome,
  faChartLine,
  faSignOutAlt,
  faBars,
  faCaretDown,
  faUser,
  faCogs,
} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  typeExercise: string;

  faHome = faHome;
  faChartLine = faChartLine;
  faSignOutAlt = faSignOutAlt;
  faBars = faBars;
  faCaretDown = faCaretDown;
  faCogs = faCogs;
  faUser = faUser;

  @Output() valueResponse: EventEmitter<string> = new EventEmitter();
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    ;
  }

  goContemplations(): void {
    this.valueResponse.emit(this.typeExercise);
    this.router.navigate(['/contemplationsMap']);
  }

  goPauses(): void {
    this.valueResponse.emit(this.typeExercise);
    this.router.navigate(['/pauseMap']);
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }

  goProfile(): void {
    this.router.navigate(['/profile']);
  }

  goConfig(): void {
    this.router.navigate(['/settings']);
  }
  
  signOff(): void {
    this.router.navigate(['/login']);
  }
}
