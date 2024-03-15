import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PersonaService } from './persona.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [PersonaService],
})
export class PersonaModule {}