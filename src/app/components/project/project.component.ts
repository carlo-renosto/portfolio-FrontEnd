import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit {
	@Input() isAdmin!: boolean;
	isButtonVisible: boolean[] = [false];

	proyectos: Proyecto[] = [];

	constructor(private renderer: Renderer2, private servicePR: ProyectoService) {

	}

  	ngOnInit(): void {
		this.servicePR.getProyectos()
			.subscribe(data => this.proyectos = data);
	}

	onEditProject(i: number) {
		this.isButtonVisible[i] = !this.isButtonVisible[i];
    }

	onEditElement(element: HTMLElement) {
		let elementEditable: boolean = !(element.contentEditable === "true");
        this.renderer.setProperty(element, 'contentEditable', elementEditable.toString());

        if(elementEditable) element.focus();
	}

	onRemoveElement(element: HTMLElement) {
		this.renderer.setProperty(element, 'textContent', '');
        this.renderer.setProperty(element, 'contentEditable', 'false');
	}

	onRemoveProject(i: number, element1: HTMLElement, element2: HTMLElement, element3: HTMLElement) {
        this.isButtonVisible[i] = false;
		this.renderer.setProperty(element1, 'textContent', '');
		this.renderer.setProperty(element2, 'textContent', '');
		this.renderer.setProperty(element3, 'textContent', '');
    }
}
