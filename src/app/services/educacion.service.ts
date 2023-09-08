
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Educacion } from '../models/educacion';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EducacionService {
    constructor(private http:HttpClient) { 
    }

    getEducaciones():Observable<Educacion[]> {
        return this.http.get<Educacion[]>('https://portfolioweb-springboot-i7sm.onrender.com/educaciones/traer');
    }
}
