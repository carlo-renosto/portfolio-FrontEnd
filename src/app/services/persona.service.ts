import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/persona';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PersonaService {
    constructor(private http:HttpClient) { 
    }

    getPersonas():Observable<Persona[]> {
        return this.http.get<Persona[]>('https://portfolioweb-springboot-i7sm.onrender.com/personas/traer');
    }
}
