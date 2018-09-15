import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { API_URL } from '../app/app.constants';
import { Observable } from 'rxjs';
import { map }from 'rxjs/operators';

const options = {
	'headers': new HttpHeaders({'Content-type': 'application/json'}),
	'observe': 'response' as 'body'
}
@Injectable()
export class AuthService {

  constructor(private jwtHelper: JwtHelper = new JwtHelper(),
  						private http: HttpClient) { }

  doLogin(usuario: { [key: string]: any }): Observable<HttpResponse<{ [key: string]: any }>> {
  	return this.http.post(API_URL + '/auth/login', usuario, options)
  		.pipe(
  				map((response: HttpResponse<{ [key: string]: any }>) => { 
  					localStorage.setItem('ventas.token', response.body.token);
  					return response; 
  				})
  			)
  }

  logOut(): Observable<string> {
  		return new Observable((observe) => {
  				localStorage.removeItem('ventas.token');
  				if (!localStorage.removeItem('ventas.token')) {
  					observe.next("LogOut realizado correctamente");
  				} else {
  					observe.error("Error al realizar el logout");
  				}
  				observe.complete();
  		})
  }

  hasAnyRole(roles: string[]): boolean {
  		let hasAnyRole = false;
  		roles.forEach((role: string) => {
  			if (this.getDecodeToken["roles"].indexOf(role) != -1) {
  					hasAnyRole = true;
  			}
  		});
  		return hasAnyRole;
  }

  getDecodeToken(): { [key: string]: any } {
  		return this.jwtHelper.decodeToken(localStorage.getItem('ventas.token'));
  }

}
