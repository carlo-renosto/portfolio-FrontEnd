import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    users:User[]=[];

    constructor(private router:Router, private serviceU:UserService) {
    }

    ngOnInit():void {
        this.serviceU.getUsers()
            .subscribe(data => this.users = data);
    }

    ingresar() { 
        if(loginCheckFields()) {
            if(loginCheckValues(this.users)) {
                this.router.navigate(['../']);
                localStorage.setItem('login', '1');
                showElements();

                localStorage.setItem('user', 'Admin');
                localStorage.setItem('pwd', 'argprograma');
            }
            else {
                alert("Acceso denegado: El nombre o la contraseña son incorrectos.");
            }
        }
    }
    regresar() {
        this.router.navigate(['../']);
        localStorage.setItem('login', '0');
        showElements();
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

function showElements() {
    var sectionMain = document.getElementById("section-main");
    var sectionRoot = document.getElementById("section-root");
    var sectionLogin = document.getElementById("section-login");
    var buttonLogin = document.getElementById("header-login");
    var button1 = document.getElementById("button-show");
    var button2 = document.getElementById("button-hide");
    var buttonEdit = document.getElementsByClassName("btn-edit") as HTMLCollectionOf<HTMLElement>;
    var buttonEditP = document.getElementsByClassName("btn-edit-project") as HTMLCollectionOf<HTMLElement>;

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
            if(buttonEditP != null) {
                for(var i=0, length=buttonEditP.length; i<length; i++) {
                    buttonEditP[i].style["display"] = "initial";
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
            if(buttonEditP != null) {
                for(var i=0, length=buttonEditP.length; i<length; i++) {
                    buttonEditP[i].style["display"] = "none";
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