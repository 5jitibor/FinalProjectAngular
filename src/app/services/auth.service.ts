import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storageService: StorageService) { }

  signup(user: User){
    this.storageService.saveUser(user);
  }
  login(email:string, passwd: string): boolean{
    let success: boolean = false;
    if(email && passwd){
      let users: User[] = this.storageService.getUsers();
      if(users){
        users.forEach((user)=>{
           if(email === user.email && passwd === user.password){
             this.storageService.saveSession(email);
             success=true;
             return;
           }
        });
      }
    }
    return success;
  }

  logout(){
    this.storageService.removeSession();
  }

  isAuthenticated(): boolean{
    return this.storageService.isAuthenticated();
  }

}
