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
export class ventasService {

  constructor(private http: HttpClient) { }


  createVenta(venta: { [key: string]: any }): Observable<HttpResponse<{ [key: string]: any }>> {
  	return this.http.post(API_URL + '/ventas', venta, options)
  		.pipe(
  				map((response: HttpResponse<{ [key: string]: any }>) => { 
  					return response; 
  				})
  			)
  }

}
