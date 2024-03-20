import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})

export class EducationComponent implements OnInit {
    @Input() isAdmin!: boolean;

	educaciones: Educacion[] = [];

	constructor(private renderer: Renderer2, private serviceED: EducacionService) {
	
    }

  	ngOnInit(): void {
		this.serviceED.getEducaciones()
			.subscribe(data => {
                this.educaciones = data
                this.educaciones.forEach(educacion => {
                    educacion.estadoS = educacion.estado ? "Completado" : "En curso";
                });
            });
	}

    onEdit(element: HTMLElement) {
        let elementEditable: boolean = !(element.contentEditable === "true");
        this.renderer.setProperty(element, 'contentEditable', elementEditable.toString());

        if(elementEditable) element.focus();
    }

    onRemove(element: HTMLElement) {
        this.renderer.setProperty(element, 'textContent', '');
        this.renderer.setProperty(element, 'contentEditable', 'false');
    }

    onEditLink(event: Event, element: HTMLElement) {
        event.preventDefault();

        this.onEdit(element);
    }
}
