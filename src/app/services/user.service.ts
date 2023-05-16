import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({providedIn: 'root'})
export class UserService {
    users:User[] = [];
    constructor(private http:HttpClient) { 
    } 

    getUsers():User[] {
        this.http.get<User[]>('https://portfolioweb-springboot-i7sm.onrender.com/usuarios/traer').subscribe(result => {
            this.users = Object.assign({}, result);
            localStorage.setItem('user', 'Admin');
            localStorage.setItem('pwd', 'Contra');
        });
        return this.users;
    }
}
