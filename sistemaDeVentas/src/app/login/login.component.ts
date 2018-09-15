import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { HttpResponse, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import  { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;		
  constructor(private router: Router,
  			  private authService: AuthService,
  			  private fb: FormBuilder) { }

  ngOnInit() {
  	$('#modalLogin').modal('show');
  	this.buildForm();
  }

  buildForm(): void {
  		this.loginForm = this.fb.group({
  			email: ['', Validators.compose([Validators.required])],
  			password: ['', Validators.compose([Validators.required])]
  		})
  }

  doLogin(): void {
  	this.authService.doLogin(this.loginForm.value)
  			.subscribe((response: HttpResponse<{ [key: string]: any }>) => {
  				console.log('Ok');
          // this.router.nave
  			}, (response: HttpErrorResponse) => {
  				console.error(response);
  			})
  }

}
