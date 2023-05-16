import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/persona';

@Injectable({providedIn: 'root'})
export class PersonaService {
    personas:Persona[] = [];
    constructor(private http:HttpClient) { 
    }

    getPersonas():Persona[] {
        this.http.get<Persona[]>('https://portfolioweb-springboot-i7sm.onrender.com/personas/traer').subscribe(result => {
            this.personas = Object.assign({}, result);
        });
        return this.personas;
    }
}
