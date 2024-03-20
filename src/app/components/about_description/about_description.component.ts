import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-about-description',
  templateUrl: './about_description.component.html',
  styleUrls: ['./about_description.component.css']
})

export class AboutDescriptionComponent implements OnInit {
	@Input() isAdmin!: boolean;

	personas: Persona[] = [];

	constructor(private renderer: Renderer2, private servicePE: PersonaService) {

    }

	ngOnInit(): void {
        this.servicePE.getPersonas()
            .subscribe(data => {
                this.personas = data;
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
}
