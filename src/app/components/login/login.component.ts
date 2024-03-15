import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import view from '../../models/view';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    users: User[] = [];

    constructor(private router: Router, private serviceU: UserService) {
    }

    ngOnInit(): void {
        this.serviceU.getUsers()
            .subscribe(data => this.users = data);
    }

    ingresar() { 
        if(loginCheckFields()) {
            if(loginCheckValues(this.users)) {
                this.router.navigate(['../']);
                localStorage.setItem('login', '1');
                view.showElements();

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
        view.showElements();
    }
}

function loginCheckFields(): boolean {
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

function loginCheckValues(users: User[]): boolean {
    var input1 = document.getElementById('inp1') as HTMLInputElement;
    var input2 = document.getElementById('inp2') as HTMLInputElement;

    for(var i=0;i<Object.keys(users).length;i++) {
        if(users[i].nombre == input1.value && users[i].contra == input2.value) {
            return true;
        }
    }
    return false;
}