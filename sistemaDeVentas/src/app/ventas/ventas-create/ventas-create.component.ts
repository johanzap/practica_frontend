import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { HttpResponse, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-ventas-create',
  templateUrl: './ventas-create.component.html',
  styleUrls: ['./ventas-create.component.css'],
  providers: [ UsuariosService ]
})
export class VentasCreateComponent implements OnInit {
	clientes: any[] = [];
  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
  	this.getUsuarios();
  }

  getUsuarios() {
  	this.usuariosService.findAll()
  		.subscribe((response: HttpResponse<{ [key: string]: any }>) => {
  			this.clientes = response.body.filter((e) => {
  				let val = false;
  				e.rolesList.forEach((role) => {
  					if (role.id == 'USER') {
  						val = true;
  					}
  				});
  				return val;
  			});
  			console.log(this.clientes);
  		})
  }

}
