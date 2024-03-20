import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
	@ViewChild('components_div') componentsDiv!: ElementRef;
  	isAdmin: boolean = false;

  	ngOnInit(): void {
		if(localStorage.getItem('user') == 'Admin' && localStorage.getItem('pwd') == 'argprograma') {
			this.isAdmin = true;
		}
	}

	onButtonShow() {
		this.componentsDiv.nativeElement.classList.add("div_show");
		this.componentsDiv.nativeElement.classList.remove("div_hide");
    }

    onButtonHide() {
		this.componentsDiv.nativeElement.classList.add("div_hide");
		this.componentsDiv.nativeElement.classList.remove("div_show");
    }
}
