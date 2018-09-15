import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [LoginComponent],	
  declarations: [LoginComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
