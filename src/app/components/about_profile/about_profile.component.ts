
import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-about',
  templateUrl: './about_profile.component.html',
  styleUrls: ['./about_profile.component.css']
})

export class AboutProfileComponent implements OnInit {
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
