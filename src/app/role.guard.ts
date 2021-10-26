import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  canActivate(): boolean {
    const user = JSON.parse(localStorage.getItem('activeUser'));

    // tslint:disable-next-line: no-string-literal
    if (user.role === 'admin') {
      return true;
    }
    return false;
  }
}
