import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    title:string = "App";
    static login:boolean = false;
    
    constructor(private router: Router) {
        HeaderComponent.login = false;
    }

    goToLogin() {
        if(HeaderComponent.login == false) { // login
            this.router.navigate(['/login']);

            editElements();
            
            HeaderComponent.login = true;
        }
        else {
            HeaderComponent.login = false; // logout
        }
    }
}

 window.addEventListener('popstate', function (e) {
    var state = e.state;
    if (state !== null) {
        editElementsReverse();
    }
});

function editElements() {
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

function editElementsReverse() {
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
