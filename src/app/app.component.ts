
import { AfterViewInit, Component, OnInit} from '@angular/core';
import { Persona } from './models/persona';
import { Educacion } from './models/educacion';
import { Proyecto } from './models/proyecto';
import { Experiencia } from './models/experiencia';
import { Tecnologia } from './models/tecnologia';
import DataService from './services/data.service';
import view from './models/view';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {
    elements: [string, boolean][] = [];

    personas: Persona[] = [];
    experiencias: Experiencia[] = [];
    educaciones: Educacion[] = [];
    tecnologias: Tecnologia[] = [];
    proyectos: Proyecto[] = [];
    estadoTrue: string = "Completado"; estadoFalse: string = "En curso";

    constructor(private dataService: DataService) {
        this.dataService.getElementsEdit().subscribe(elements => {
            elements["_elements"].forEach((element: string) => {
                this.elements.push([element, false]);
            });
        });
    }

    ngOnInit(): void {
        this.dataService.fetchData(this.personas, this.experiencias, this.educaciones, this.tecnologias, this.proyectos);
    }

    ngAfterViewInit(): void {
        if(localStorage.getItem('user') == 'Admin' && localStorage.getItem('pwd') == 'argprograma') {
            view.showElements();
        }
    }

    onEdit(id: string) {
        let i = this.elements.findIndex(elm => elm[0] === id);
        this.elements[i][1] = !this.elements[i][1];
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


}
