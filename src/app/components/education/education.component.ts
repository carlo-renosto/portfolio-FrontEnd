import { Component, OnInit } from '@angular/core';
import DataService from 'src/app/services/data.service';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})

export class EducationComponent implements OnInit {
	elements: [string, boolean][] = [];
	educaciones: Educacion[] = [];

	constructor(private dataService: DataService, private serviceED: EducacionService) {
		this.dataService.getElementsEducation().subscribe(elements => {
            elements["elements_education"].forEach((element: string) => {
                this.elements.push([element, false]);
            });
        });
	}

  	ngOnInit(): void {
		this.serviceED.getEducaciones()
			.subscribe(data => this.educaciones = data);
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
