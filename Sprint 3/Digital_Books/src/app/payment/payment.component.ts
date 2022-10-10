import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { registerData } from '../model/register';
import { UserData } from '../model/userdata';
import { LoginServiceService } from '../services/login-service.service';
import { SharedserviceService } from '../services/shared/sharedservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
 
  constructor(private shared:SharedserviceService,private _service:LoginServiceService,private _router:Router) { }


  UserDataModel: UserData =new UserData();
  SearchBookModel: registerData = new registerData();

  input :string='';
  ngOnInit(): void {
    this.input = this.shared.getmessage();
  }
  receivemessage($event: string)
  {
this.input=$event;
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
