import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

declare var $:any;
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  	$('#modalLogin').modal('show');
  }

}
