import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProyectoService } from './proyecto.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [ProyectoService],
})
export class ProyectoModule {}