import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
  	const routeRoles: string[] = route.data.roles ? route.data.roles : [];
  	if (routeRoles.length < 1) {
  		return true;
  	} else {
  		return this.authService.hasAnyRole(routeRoles);
  	}
  }

}
