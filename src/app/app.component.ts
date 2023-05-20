
import { AfterViewInit, Component, OnInit} from '@angular/core';
import { PersonaService } from './services/persona.service';
import { Persona } from './models/persona';
import { EducacionService } from './services/educacion.service';
import { Educacion } from './models/educacion';
import { ProyectoService } from './services/proyecto.service';
import { Proyecto } from './models/proyecto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {
    title = 'portfolioWeb';
    personas:Persona[] = [];
    educaciones:Educacion[] = [];
    proyectos:Proyecto[] = [];
    estadoTrue:string="Completado"; estadoFalse:string="En curso";

    constructor(private serviceP:PersonaService, private serviceE:EducacionService, private servicePro:ProyectoService) {
    }

    ngOnInit():void {
        this.serviceP.getPersonas()
            .subscribe(data => this.personas = data);
        this.serviceE.getEducaciones()
            .subscribe(data => this.educaciones = data);
        this.servicePro.getProyectos()
            .subscribe(data => this.proyectos = data);
    }

    ngAfterViewInit():void {
        if(localStorage.getItem('user') == 'Admin' && localStorage.getItem('pwd') == 'argprograma') {
            showElements();
        }
    }

    onEdit(id:string) {
        var element = document.getElementById(id);

        if(element != null) {
            element.contentEditable = element.contentEditable == "true" ? "false" : "true";
            if(element.textContent == "") {
                element.textContent = "Texto";
            }
        }
    }
    onEditProject(id:string, id2:string, id3:string, id4:string) {
        var element = document.getElementById(id);
        var elementN = document.getElementById(id2);
        var elementD = document.getElementById(id3);
        var elementF = document.getElementById(id4);
        var address = document.getElementById('link-project1');

        if(element != null && address != null && elementN != null && elementD != null && elementF != null) {
            address.style.pointerEvents = element.contentEditable == "true" ? 'initial' : "none";
            element.contentEditable = element.contentEditable == "true" ? "false" : "true";
        }
    }

    onRemove(id:string) {
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
}

function showElements() {
    var sectionMain = document.getElementById("section-main");
    var sectionRoot = document.getElementById("section-root");
    var sectionLogin = document.getElementById("section-login");
    var buttonLogin = document.getElementById("header-login");
    var button1 = document.getElementById("button-show");
    var button2 = document.getElementById("button-hide");
    var buttonEdit = document.getElementsByClassName("btn-edit") as HTMLCollectionOf<HTMLElement>;

    if(sectionMain != null) {
        sectionMain.style.width = "95%";
        sectionMain.style.margin = "5px auto";
        sectionMain.style.border = "2px solid #005EB0";
        sectionMain.style.boxShadow = "5px 5px #005EB0";
    }
    if(sectionRoot != null) {
        sectionRoot.style.display = "block";
    }
    if(sectionLogin != null) {
        sectionLogin.style.display = "none";
    }
    if(buttonLogin != null) {
        if(localStorage.getItem('login') == '1') {
            buttonLogin.style.backgroundColor = "#F20707";
            buttonLogin.textContent = "Logout";
            if(buttonEdit != null) {
                for(var i=0, length=buttonEdit.length; i<length; i++) {
                    buttonEdit[i].style["display"] = "initial";
                }
            }
        }
        else {
            buttonLogin.style.backgroundColor = "#0275D8";
            buttonLogin.textContent = "Login";
            if(buttonEdit != null) {
                for(var i=0, length=buttonEdit.length; i<length; i++) {
                    buttonEdit[i].style["display"] = "none";
                }
            }
        }
    }    
    if(button1 != null && button2 != null) {
        if(localStorage.getItem('login') == '1') {
            button1.style.display = "initial";
            button2.style.display = "initial";
        }
        else {
            button1.style.display = "none";
            button2.style.display = "none"; 
        }
    }
}

