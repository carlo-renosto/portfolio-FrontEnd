
import { AfterViewInit, Component, OnInit} from '@angular/core';
import view from './models/view';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {
    constructor() {

    }

    ngOnInit(): void {
    
    }

    ngAfterViewInit(): void {
        if(localStorage.getItem('user') == 'Admin' && localStorage.getItem('pwd') == 'argprograma') {
            view.showElements();
        }
    }
}
