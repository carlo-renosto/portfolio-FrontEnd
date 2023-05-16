import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proyecto } from '../models/proyecto';

@Injectable({providedIn: 'root'})
export class ProyectoService {
    proyectos:Proyecto[] = [];
    constructor(private http:HttpClient) { }

    getProyectos():Proyecto[] {
        this.http.get<Proyecto[]>('https://portfolioweb-springboot-i7sm.onrender.com/proyectos/traer').subscribe(result => {
            this.proyectos = Object.assign({}, result);
        });
        return this.proyectos;
    }
}
