import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProjectComponent } from './components/project/project.component';

import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { HttpClientModule } from '@angular/common/http';

import { EducacionModule } from './services/educacion.module';
import { ExperienciaModule } from './services/experiencia.module';
import { PersonaModule } from './services/persona.module';
import { ProyectoModule } from './services/proyecto.module';
import { TecnologiaModule } from './services/tecnologia.module';

import DataService from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
        { path: 'login', component: LoginComponent }
    ]),
    EducacionModule,
    ExperienciaModule,
    PersonaModule,
    ProyectoModule,
    TecnologiaModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { 
 
}




