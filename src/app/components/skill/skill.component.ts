import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Tecnologia } from 'src/app/models/tecnologia';
import { TecnologiaService } from 'src/app/services/tecnologia.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})

export class SkillComponent implements OnInit {
    @Input() isAdmin!: boolean;

	tecnologias: Tecnologia[] = [];

	constructor(private renderer: Renderer2, private serviceTE: TecnologiaService) {
	}

  	ngOnInit(): void {
		this.serviceTE.getTecnologias()
			.subscribe(data => this.tecnologias = data);
	}

    onEdit(element: HTMLElement) {
        let elementEditable: boolean = !(element.contentEditable === "true");
        this.renderer.setProperty(element, 'contentEditable', elementEditable.toString());

        if(elementEditable) element.focus();
    }

    onRemovePerc(element: HTMLElement) {
        this.renderer.setProperty(element, 'textContent', '0%');
        this.renderer.setProperty(element, 'contentEditable', 'false');
    }

    
    onRemoveSkill(element: HTMLElement) {
        this.renderer.setProperty(element, 'textContent', '-');
        this.renderer.setProperty(element, 'contentEditable', 'false');
    }
}
