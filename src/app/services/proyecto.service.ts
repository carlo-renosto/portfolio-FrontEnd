import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proyecto } from '../models/proyecto';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProyectoService {
    constructor(private http:HttpClient) { }

    getProyectos():Observable<Proyecto[]> {
        return this.http.get<Proyecto[]>('https://portfolioweb-springboot-i7sm.onrender.com/proyectos/traer');
    }
}
