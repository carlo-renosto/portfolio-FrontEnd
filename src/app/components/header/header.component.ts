import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    title:string = "App";
    
    constructor(private router: Router) {
    }

    loginClick() {
        if(localStorage.getItem('login') != '1') { // login
            this.router.navigate(['/login']);
            showLogin();
        }
        else { // logout
            localStorage.setItem('login', '0');
            showElements();
            localStorage.setItem('user', 'User');
            localStorage.setItem('pwd', 'user');
        }
    }
}

 window.addEventListener('popstate', function (e) {
    var state = e.state;
    if(state !== null) {
        showElements();
    }
});

function showLogin() {
    var sectionMain = document.getElementById("section-main");
    var sectionRoot = document.getElementById("section-root");
    var sectionLogin = document.getElementById("section-login");

    if(sectionMain != null) {
        sectionMain.style.width = "100%";
        sectionMain.style.margin = "none";
        sectionMain.style.border = "none";
        sectionMain.style.boxShadow = "none";
    }
    if(sectionRoot != null) {
        sectionRoot.style.display = "none";
    }
    if(sectionLogin != null) {
        sectionLogin.style.display = "block";
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
