import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ExperienciaService } from './experiencia.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [ExperienciaService],
})
export class ExperienciaModule {}