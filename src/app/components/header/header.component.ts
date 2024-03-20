import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements AfterViewInit {    
    @ViewChild('login_button') loginButton!: ElementRef;

    constructor(private router: Router) {

    }

    ngAfterViewInit(): void {
        if(localStorage.getItem('user') == 'Admin' && localStorage.getItem('pwd') == 'argprograma') {
            this.loginChange(true);
        }
        else {
            this.loginChange(false);
        }
    }

    loginClick() {
        // login
        if(localStorage.getItem('login') != '1') { 
            this.router.navigate(['/login']);
            this.loginChange(true);
        }
        // logout
        else { 
            this.router.navigate(['/home']);

            localStorage.setItem('login', '0');
            
            localStorage.setItem('user', 'User');
            localStorage.setItem('pwd', 'user');

            this.loginChange(false);
        }
    }

    loginChange(login: boolean) {
        if(login) {
            this.loginButton.nativeElement.classList.add("login");
            this.loginButton.nativeElement.classList.remove("logout");
            this.loginButton.nativeElement.textContent = "Logout";
        }
        else {
            this.loginButton.nativeElement.classList.add("logout");
            this.loginButton.nativeElement.classList.remove("login");
            this.loginButton.nativeElement.textContent = "Login";
        }
    }
}