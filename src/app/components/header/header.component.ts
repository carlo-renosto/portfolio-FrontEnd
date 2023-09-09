import { Component } from '@angular/core';
import { Router } from '@angular/router';
import view from '../../models/view'

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
        // login
        if(localStorage.getItem('login') != '1') { 
            this.router.navigate(['/login']);
            view.showLogin();
        }
        // logout
        else { 
            localStorage.setItem('login', '0');
            view.showElements();
            
            localStorage.setItem('user', 'User');
            localStorage.setItem('pwd', 'user');
        }
    }
}

window.addEventListener('popstate', function (e) {
    var state = e.state;
    if(state !== null) {
        view.showElements();
    }
});