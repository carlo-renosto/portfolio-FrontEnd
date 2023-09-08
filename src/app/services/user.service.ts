import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {
    constructor(private http:HttpClient) { 
    } 

    getUsers():Observable<User[]> {
        return this.http.get<User[]>('https://portfolioweb-springboot-i7sm.onrender.com/usuarios/traer');
    }
}
