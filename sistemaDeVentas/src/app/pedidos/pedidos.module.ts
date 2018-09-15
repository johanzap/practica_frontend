import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosCreateComponent } from '../pedidos/pedidos-create/pedidos-create.component';
import { PedidosService } from './pedidos.service.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PedidosCreateComponent],
  providers: [PedidosService]
})
export class PedidosModule { }
