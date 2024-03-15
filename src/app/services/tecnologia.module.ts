import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TecnologiaService } from './tecnologia.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [TecnologiaService],
})
export class TecnologiaModule {}