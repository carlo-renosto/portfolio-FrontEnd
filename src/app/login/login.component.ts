import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
    users:User[];
    constructor(private router:Router, private service:UserService) {
        this.users = service.getUsers();
    }

    ingresar() {
        this.users = this.service.getUsers();
        
        if(loginCheckFields()) {
            if(loginCheckValues(this.users)) {
                editElements();
                this.router.navigate(['../']);
            }
            else {
                alert("Acceso denegado: El nombre o la contraseña son incorrectos.");
            }
        }
    }
    regresar() {
        editElements();
        this.router.navigate(['../']);
    }
}

function loginCheckFields(): Boolean {
    var input1 = document.getElementById('inp1') as HTMLInputElement;
    var input2 = document.getElementById('inp2') as HTMLInputElement;

    if(input1.value == "" && input2.value == "") {
        alert("Ingrese nombre y contraseña.");
        return false;
    }
    if(input1.value == "") {
        alert("Ingrese nombre.");
        return false;
    }
    if(input2.value == "") {
        alert("Ingrese contraseña.");
        return false;
    }

    return true;
}

function loginCheckValues(users:User[]):Boolean {
    var input1 = document.getElementById('inp1') as HTMLInputElement;
    var input2 = document.getElementById('inp2') as HTMLInputElement;

    for(var i=0;i<Object.keys(users).length;i++) {
        if(users[i].nombre == input1.value && users[i].contra == input2.value) {
            return true;
        }
    }
    return false;
}

function editElements() {
    var sectionMain = document.getElementById("section-main");
    var sectionRoot = document.getElementById("section-root");
    var sectionLogin = document.getElementById("section-login");

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
}