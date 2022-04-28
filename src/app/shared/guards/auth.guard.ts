import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { LoginService } from '~/login/login.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private loginService: LoginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.loginService.isLoggedIn();
    if (user) {
      return true;
    }

    // redirect to the login page if not authorised, keep the params
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
