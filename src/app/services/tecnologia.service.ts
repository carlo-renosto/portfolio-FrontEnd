import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tecnologia } from '../models/tecnologia';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class TecnologiaService {
    constructor(private http:HttpClient) { 
    }

    getTecnologias():Observable<Tecnologia[]> {
        return this.http.get<Tecnologia[]>('https://portfolioweb-springboot-i7sm.onrender.com/tecnologias/traer');
    }
}
