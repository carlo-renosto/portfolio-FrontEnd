import { Component, OnInit } from '@angular/core';
import DataService from 'src/app/services/data.service';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent implements OnInit {
  	elements: [string, boolean][] = [];
	experiencias: Experiencia[] = [];

	constructor(private dataService: DataService, private serviceEX: ExperienciaService) {
		this.dataService.getElementsExperience().subscribe(elements => {
            elements["elements_experience"].forEach((element: string) => {
                this.elements.push([element, false]);
            });
        });
	}

	ngOnInit(): void {
		this.serviceEX.getExperiencias()
			.subscribe(data => this.experiencias = data);
	}

	onEdit(id: string) {
        let i = this.elements.findIndex(elm => elm[0] === id);
        this.elements[i][1] = !this.elements[i][1];
    }

    onRemove(id: string) {
        var element = document.getElementById(id);

        if(element != null) {
            element.textContent = "";
            element.contentEditable = "false";
        } 
    }
}
