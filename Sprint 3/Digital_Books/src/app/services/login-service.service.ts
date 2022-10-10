import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../model/userdata';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  _loginUrl = "https://localhost:44354/api/Login/login-user";
 _registerinUrl = "https://localhost:44354/api/Login/register-user";

 // _loginUrl = "http://20.115.97.164/api/gateway/customer/login";
  //_registerinUrl = "http://20.115.97.164/api/gateway/customer/register-user";



  constructor(private http: HttpClient,private _router:Router) { }

  UserDataModel:UserData = new UserData();

  public token:any
  public UserName : any

  loginUser(login:any){
    debugger;
    return this.http.post<any>(this._loginUrl,login);
  }
  registerUser(login:any)
  {
    debugger;
    return this.http.post<any>(this._registerinUrl,login);
  }
  getToken(){
    debugger;
    this.token = localStorage.getItem('token');
    return this.token;
  }
  logginIn(){
    return !!localStorage.getItem('token');
  }

  logoutUser(){
    localStorage.removeItem('token');
    this._router.navigate(['']);
  }
}
