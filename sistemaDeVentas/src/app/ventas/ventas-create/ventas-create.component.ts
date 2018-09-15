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

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
  	this.getUsuarios();
  }

  getUsuarios() {
  	this.usuariosService.findAll()
  		.subscribe((response: HttpResponse<{ [key: string]: any }>) => {
  			console.log(response.body);
  		})
  }

}
