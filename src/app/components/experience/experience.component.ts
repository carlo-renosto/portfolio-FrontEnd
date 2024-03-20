import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent implements OnInit {
    @Input() isAdmin!: boolean;

	experiencias: Experiencia[] = [];

	constructor(private renderer: Renderer2, private serviceEX: ExperienciaService) {

	}

	ngOnInit(): void {
		this.serviceEX.getExperiencias()
			.subscribe(data => this.experiencias = data);
	}

    onEdit(element: HTMLElement) {
        let elementEditable: boolean = !(element.contentEditable === "true");
        this.renderer.setProperty(element, 'contentEditable', elementEditable.toString());

        if(elementEditable) element.focus();
    }

    onRemove(element: HTMLElement) {
        this.experiencias[0].puesto = "";
        this.renderer.setProperty(element, 'contentEditable', 'false');
    }
}
