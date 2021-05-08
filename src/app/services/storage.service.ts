import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getUsers(): User[]{
    return JSON.parse(localStorage.getItem('cv19_users'));
  }

  saveUser(user:User){
    let users = this.getUsers();
    if(!users){
      users = [];
    }
    users.push(user);
    localStorage.setItem('cv19_users',JSON.stringify(users));
  }

  saveSession(email:string){
    localStorage.setItem('cv19_session', email);
  }

  removeSession(){
    localStorage.removeItem('cv19_session');
  }

  isAuthenticated(): boolean{
    return(
    localStorage.getItem('cv19_session')!=null&&
    localStorage.getItem('cv19_session')!=undefined
    );
  }
}
