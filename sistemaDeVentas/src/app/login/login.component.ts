import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$('#modalLogin').modal('show');
  }

}
