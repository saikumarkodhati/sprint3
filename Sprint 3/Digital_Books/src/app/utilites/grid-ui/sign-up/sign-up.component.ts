import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/model/userdata';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpModule } from './sign-up.module';
import { register } from './sign-up.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  constructor(private _service:LoginServiceService,private _router:Router) { }

  UserDataModel: UserData =new UserData();
  SearchBookModel: register = new register();

  ngOnInit(): void {
  }
  registeruser()
  {
    debugger;
    this._service.registerUser(this.UserDataModel).subscribe(res=>{
      localStorage.setItem('token',res.token);
      this._router.navigate(['home']);
    },res=>console.log(res));  
  }

}
