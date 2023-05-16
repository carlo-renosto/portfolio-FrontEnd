
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Educacion } from '../models/educacion';

@Injectable({providedIn: 'root'})
export class EducacionService {
    educaciones:Educacion[] = [];
    constructor(private http:HttpClient) { 
    }

    getEducaciones():Educacion[] {
        this.http.get<Educacion[]>('https://portfolioweb-springboot-i7sm.onrender.com/personas/traer').subscribe(result => {
            this.educaciones = Object.assign({}, result);
        });
        return this.educaciones;
    }
}
