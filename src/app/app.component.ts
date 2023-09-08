
import { AfterViewInit, Component, OnInit} from '@angular/core';
import { PersonaService } from './services/persona.service';
import { Persona } from './models/persona';
import { EducacionService } from './services/educacion.service';
import { Educacion } from './models/educacion';
import { ProyectoService } from './services/proyecto.service';
import { Proyecto } from './models/proyecto';
import { ExperienciaService } from './services/experiencia.service';
import { Experiencia } from './models/experiencia';
import { TecnologiaService } from './services/tecnologia.service';
import { Tecnologia } from './models/tecnologia';
import view  from './models/view';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {
    title = 'portfolioWeb';
    personas: Persona[] = [];
    experiencias: Experiencia[] = [];
    educaciones: Educacion[] = [];
    tecnologias: Tecnologia[] = [];
    proyectos: Proyecto[] = [];
    estadoTrue: string = "Completado"; estadoFalse: string = "En curso";

    constructor(private servicePE:PersonaService, private serviceEX:ExperienciaService, private serviceED:EducacionService, private serviceTE:TecnologiaService, private servicePR:ProyectoService) {
    }

    ngOnInit(): void {
        this.servicePE.getPersonas()
            .subscribe(data => this.personas = data);
        this.serviceEX.getExperiencias()
            .subscribe(data => this.experiencias = data);
        this.serviceED.getEducaciones()
            .subscribe(data => this.educaciones = data);
        this.serviceTE.getTecnologias()
            .subscribe(data => this.tecnologias = data);
        this.servicePR.getProyectos()
            .subscribe(data => this.proyectos = data);
    }

    ngAfterViewInit(): void {
        if(localStorage.getItem('user') == 'Admin' && localStorage.getItem('pwd') == 'argprograma') {
            view.showElements();
        }
    }

    onEdit(id: string) {
        var element = document.getElementById(id);

        if(element != null) {
            element.contentEditable = element.contentEditable == "true" ? "false" : "true";
            if(element.isContentEditable) element.focus();
        }
    }
    
    onEditSkill(id: string, id2: string) {
        var elementC = document.getElementById(id);
        var elementN = document.getElementById(id2);

        if(elementC != null && elementN != null) {
            elementC.contentEditable = elementC.contentEditable == "true" ? "false" : "true";
            if(elementC.isContentEditable) elementC.focus();
            elementN.contentEditable = elementN.contentEditable == "true" ? "false" : "true";
            if(elementN.isContentEditable) elementN.focus();
        }
    }

    onEditProject(id: string, id2: string) {
        var element = document.getElementById(id);
        var address = document.getElementById(id2);

        if(element != null && address != null) {
            address.style.pointerEvents = element.contentEditable == "true" ? 'initial' : "none";
            element.contentEditable = element.contentEditable == "true" ? "false" : "true";
        }
    }

    onRemove(id: string) {
        var element = document.getElementById(id);

        if(element != null) {
            element.textContent = "";
            element.contentEditable = "false";
        } 
    }

    onRemoveSkill(id: string, id2: string) {
        var elementC = document.getElementById(id);
        var elementN = document.getElementById(id2);

        if(elementC != null && elementN != null) {
            elementC.textContent = "";
            elementN.textContent = "";
        }
    }

    onRemoveProject(id: string) {
        var element = document.getElementById(id);

        if(element != null) {
            var height: string = window.getComputedStyle(element).getPropertyValue('height');
            var width: string = window.getComputedStyle(element).getPropertyValue('width');

            element.textContent = " ";
            element.style.height = height;
            element.style.width = width;
        }
    }

    onButtonShow() {
        var element = document.getElementById("sections");

        if(element != null) {
            element.style.display = "initial";
        }
    }

    onButtonHide() {
        var element = document.getElementById("sections");

        if(element != null) {
            element.style.display = "none";
        }
    }
}
