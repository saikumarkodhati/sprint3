import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { UserData } from 'src/app/model/userdata';


@Component({
  selector: 'app-read-ui',
  templateUrl: './read-ui.component.html',
  styleUrls: ['./read-ui.component.css']
})
export class ReadUiComponent implements OnInit {

  public imagePath: any
 

  constructor(private _router: Router,private _service:LoginServiceService) { }

  public imageURL: any = "https://testimage12.blob.core.windows.net/images/";

  readColumns: Array<any> = new Array<any>();

  //getting column data
  readData: Array<any> = new Array<any>();

  UserDatamodel:UserData = new UserData();



  ngOnInit(): void {
  }

  readImage(input: any) {
    console.log(input)
  }

  @Input("read-columns")
  set SetreadColumns(_readColumn: Array<any>) {
    this.readColumns = _readColumn;
  }
  @Input("read-data")
  set SetreadData(_readData: Array<any>) {
    this.readData = _readData;
  }
  @Output("read-selected")
  emitemitter: EventEmitter<any> = new EventEmitter<any>();

  selectedGrid(_selected: any) {
    debugger;
   
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
