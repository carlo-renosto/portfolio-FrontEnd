import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, forkJoin } from "rxjs";
import { EducacionService } from "./educacion.service";
import { ExperienciaService } from "./experiencia.service";
import { PersonaService } from "./persona.service";
import { ProyectoService } from "./proyecto.service";
import { TecnologiaService } from "./tecnologia.service";

@Injectable({
    providedIn: 'root'
})
class DataService {
    constructor(
        private http: HttpClient,
        private servicePE: PersonaService,
        private serviceEX: ExperienciaService,
        private serviceED: EducacionService,
        private serviceTE: TecnologiaService,
        private servicePR: ProyectoService
    ) {}

    getElementsAbout(): Observable<any> {
        return this.http.get<any>("assets/elements_about.json");
    }

    getElementsExperience(): Observable<any> {
        return this.http.get<any>("assets/elements_experience.json");
    }
    
    getElementsEducation(): Observable<any> {
        return this.http.get<any>("assets/elements_education.json");
    }

    getElementsSkill(): Observable<any> {
        return this.http.get<any>("assets/elements_skill.json");
    }

    getElementsProject(): Observable<any> {
        return this.http.get<any>("assets/elements_project.json");
    }

    getElementsEdit(): Observable<any> {
        return this.http.get<any>("assets/elements.json");
    }  

    fetchData(personas: any[], experiencias: any[], educaciones: any[], tecnologias: any[], proyectos: any[]) : void {
        const dataRequests: Observable<any>[] = [
            this.servicePE.getPersonas(),
            this.serviceEX.getExperiencias(),
            this.serviceED.getEducaciones(),
            this.serviceTE.getTecnologias(),
            this.servicePR.getProyectos()
        ];
        
        forkJoin(dataRequests).subscribe({
            next: ([fetchedPersonas, fetchedExperiencias, fetchedEducaciones, fetchedTecnologias, fetchedProyectos]) => {
                personas.push(...fetchedPersonas);
                experiencias.push(...fetchedExperiencias);
                educaciones.push(...fetchedEducaciones);
                tecnologias.push(...fetchedTecnologias);
                proyectos.push(...fetchedProyectos);
            },
            error: error => {
                console.error('Error fetching data:', error);
            }
        });
      }
}

export default DataService;