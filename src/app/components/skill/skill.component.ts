import { Component, OnInit } from '@angular/core';
import DataService from 'src/app/services/data.service';
import { Tecnologia } from 'src/app/models/tecnologia';
import { TecnologiaService } from 'src/app/services/tecnologia.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})

export class SkillComponent implements OnInit {
	elements: [string, boolean][] = [];
	tecnologias: Tecnologia[] = [];

	constructor(private dataService: DataService, private serviceTE: TecnologiaService) {
		this.dataService.getElementsSkill().subscribe(elements => {
            elements["elements_skill"].forEach((element: string) => {
                this.elements.push([element, false]);
            });
        });
	}

  	ngOnInit(): void {
		this.serviceTE.getTecnologias()
			.subscribe(data => this.tecnologias = data);
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

	onRemoveSkill(id: string, id2: string) {
        var elementC = document.getElementById(id);
        var elementN = document.getElementById(id2);

        if(elementC != null && elementN != null) {
            elementC.textContent = "";
            elementN.textContent = "";
        }
    }
}
