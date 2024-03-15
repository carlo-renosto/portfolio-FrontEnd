import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import DataService from 'src/app/services/data.service';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit {
	elements: [string, boolean][] = [];
	proyectos: Proyecto[] = [];

	constructor(private dataService: DataService, private servicePR: ProyectoService) {
		this.dataService.getElementsProject().subscribe(elements => {
            elements["elements_project"].forEach((element: string) => {
                this.elements.push([element, false]);
            });
        });
	}

  	ngOnInit(): void {
		this.servicePR.getProyectos()
			.subscribe(data => this.proyectos = data);
	}

	onEditProject(id: string, id2: string) {
        var element = document.getElementById(id);
        var address = document.getElementById(id2);

        if(element != null && address != null) {
            address.style.pointerEvents = element.contentEditable == "true" ? 'initial' : "none";
            element.contentEditable = element.contentEditable == "true" ? "false" : "true";
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
}
