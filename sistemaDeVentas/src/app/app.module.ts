import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PedidosModule } from './pedidos/pedidos.module';
import { VentasModule } from './ventas/ventas.module';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PedidosModule,
    VentasModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
