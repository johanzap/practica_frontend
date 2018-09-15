import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasCreateComponent } from './ventas-create/ventas-create.component';
import { ventasService } from './ventas.service.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VentasCreateComponent],
  providers: [ ventasService ]
})
export class VentasModule { }
