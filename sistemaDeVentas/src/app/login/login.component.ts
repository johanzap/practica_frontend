import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { HttpResponse, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import  { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AuthService ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;		
  loginError: boolean = false;
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
  		});
      this.loginForm.controls.password.valueChanges.subscribe(() => {
        console.log(this.loginForm.controls.email)
      })
  }
  
  doLogin(): void {
  	this.authService.doLogin(this.loginForm.value)
  			.subscribe((response: HttpResponse<{ [key: string]: any }>) => {
  				console.log('Ok');
  			}, (response: HttpErrorResponse) => {
          this.loginError = true;
  				console.error(response);

  			})
  }

}
