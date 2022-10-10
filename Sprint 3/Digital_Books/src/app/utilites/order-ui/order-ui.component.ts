import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { UserData } from 'src/app/model/userdata';

@Component({
  selector: 'app-order-ui',
  templateUrl: './order-ui.component.html',
  styleUrls: ['./order-ui.component.css']
})
export class OrderUiComponent implements OnInit {

  public imagePath: any

  constructor(private _router: Router,private _service:LoginServiceService) { }

  public imageURL: any = "https://testimage12.blob.core.windows.net/images/";

  public Cancel: boolean = true;

  OrderColumns: Array<any> = new Array<any>();

  //getting column data
  OrderData: Array<any> = new Array<any>();

  UserDatamodel:UserData = new UserData();


  ngOnInit(): void {
  }
  OrderImage(input: any) {
    console.log(input)
  }
  @Input("Order-columns")
  set SetOrderColumns(_OrderColumn: Array<any>) {
    this.OrderData = _OrderColumn;
  }
  @Input("Order-data")
  set SetOrderData(_OrderData: Array<any>) {
    this.OrderData = _OrderData;
  }
  @Output("Order-selected")
  emitemitter: EventEmitter<any> = new EventEmitter<any>();

  selectedGrid(_selected: any) {
    debugger;
   this.Cancel = false;
    this.emitemitter.emit(_selected);
    
  }

  @Output("read-deleted")
  emitemitters: EventEmitter<any> = new EventEmitter<any>();

  deleteGrid(_deleted: any) {
    debugger;
    this.emitemitters.emit(_deleted);
  }

  @Output("read-bookbuy")
  _bookbuyemitemitter: EventEmitter<any> = new EventEmitter<any>();
  buyABook(_bookbuy: any) {
    debugger;
    this._bookbuyemitemitter.emit(_bookbuy);
    this._router.navigate(['bookdetails']);
  }
}
