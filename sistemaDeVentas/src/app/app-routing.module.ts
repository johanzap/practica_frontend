import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { VentasCreateComponent } from './ventas/ventas-create/ventas-create.component';

const routes: Route[] = [
	{ path: '', redirectTo: '/', pathMatch: 'full' },
	{ path: 'ventas', component: VentasCreateComponent}

]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
  	RouterModule
  ]
})
export class AppRoutingModule { }
