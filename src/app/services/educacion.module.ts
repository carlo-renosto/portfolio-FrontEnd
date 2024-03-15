import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EducacionService } from './educacion.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [EducacionService],
})
export class EducacionModule {}