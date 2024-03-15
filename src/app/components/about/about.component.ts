
import { Component, OnInit } from '@angular/core';
import DataService from 'src/app/services/data.service';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
    elements: [string, boolean][] = [];
	personas: Persona[] = [];

	constructor(private dataService: DataService, private servicePE: PersonaService) {
		this.dataService.getElementsAbout().subscribe(elements => {
            elements["elements_about"].forEach((element: string) => {
                this.elements.push([element, false]);
            });
        });
	}

	ngOnInit(): void {
        this.servicePE.getPersonas()
            .subscribe(data => this.personas = data);
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

	onButtonShow() {
        var element = document.getElementById("sections");

        if(element != null) {
            element.style.display = "initial";
        }
    }

    onButtonHide() {
        var element = document.getElementById("sections");

        if(element != null) {
            element.style.display = "none";
        }
    }

	onUploadImage() {
        var fileInput = document.getElementById("fileInput");

        fileInput?.addEventListener('change', this.onChangeImage);
        fileInput?.click();
    }

    onChangeImage(event: any) {
        const file = event.target.files[0];
        if(file) {
            var profilePic = document.getElementById("profile-pic");

            profilePic?.setAttribute("src", URL.createObjectURL(file));
        }
    }

    onRemoveImage() {
        var profilePic = document.getElementById("profile-pic");
        
        profilePic?.setAttribute("src", "../assets/perfil.png");
    }
}
