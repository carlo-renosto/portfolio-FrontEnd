import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experiencia } from '../models/experiencia';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ExperienciaService {
    experiencias:Experiencia[] = [];
    constructor(private http:HttpClient) { 
    }

    getExperiencias():Observable<Experiencia[]> {
        return this.http.get<Experiencia[]>('https://portfolioweb-springboot-i7sm.onrender.com/experiencias/traer');
    }
}
