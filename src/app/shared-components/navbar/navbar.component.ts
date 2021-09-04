import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor(private router: Router) {}
  mobile: boolean = false;

  ngOnInit(): void {
    if (document.body.offsetWidth <= 380) {
      // 768px portrait
      this.mobile = true;
    }
  }
  navContemplationMap(): void {
    this.router.navigate(['/contemplationsMap']);
  }
  navPauseMap(): void {
    this.router.navigate(['/pauseMap']);
  }
  navProfile(): void {
    this.router.navigate(['/profile']);
  }
  navSettings(): void {
    this.router.navigate(['/settings']);
  }
  navLogout(): void {
    this.router.navigate(['/home']);
  }
  navHome(): void {
    this.router.navigate(['/contemplationsMap']);
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };
}
