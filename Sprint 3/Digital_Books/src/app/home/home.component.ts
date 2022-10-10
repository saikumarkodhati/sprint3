import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _service:LoginServiceService) { }

  public UserName :any

  ngOnInit(): void {
  }

  imageURL = "././assets/Book.jpg";
  imageURL1 = "././assets/dotnet.jpg";
  imageURL2 = "././assets/Angular.png";
  imageURL3 = "././assets/Azure.png";
  imageURL4 = "././assets/webapi.png";

  Img = this._service.UserName;

}
