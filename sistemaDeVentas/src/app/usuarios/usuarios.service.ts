import { Injectable } from '@angular/core';
import { HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { API_URL } from '../../app/app.constants';
import { Observable } from 'rxjs';
import { map }from 'rxjs/operators';

const options = {
	'headers': new HttpHeaders({'Content-type': 'application/json'}),
	'observe': 'response' as 'body'
}
@Injectable()
export class UsuariosService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<HttpResponse<{ [key: string]: any }>> {
  	return this.http.get(API_URL + '/usuarios')
  		.pipe(
  				map((response: HttpResponse<{ [key: string]: any }>) => { 
  					return response; 
  				})
  			)
  }

}
