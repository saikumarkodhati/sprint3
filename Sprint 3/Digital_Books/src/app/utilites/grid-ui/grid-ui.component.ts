import { Component, EventEmitter,Input,Output,OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { UserData } from 'src/app/model/userdata';

@Component({
  selector: 'app-grid-ui',
  templateUrl: './grid-ui.component.html'
 })
export class GridUiComponent implements OnInit {

  public imagePath:any

  constructor(private _service:LoginServiceService) { }
  public imageURL:any="https://testimage12.blob.core.windows.net/images/";
   //getting column names
   gridColumns:Array<any> = new Array<any>();

   //getting column data
   gridData:Array<any> = new Array<any>();
   UserDatamodel:UserData = new UserData();

  ngOnInit(): void {
  }

 getImage(input:any){
    console.log(input)
      }

  @Input("grid-columns")
  set SetGridColumns(_gridColumn:Array<any>){
    this.gridColumns=_gridColumn;
  }
  @Input("grid-data")
  set SetGridData(_gridData:Array<any>){
    this.gridData=_gridData;
  }
  @Output("grid-selected")
  emitemitter:EventEmitter<any>=new EventEmitter<any>();

  @Output("grid-deleted")
  emitemitters:EventEmitter<any>=new EventEmitter<any>();

  selectedGrid(_selected:any){
    debugger;
    this._service.getToken();
    if(this._service.getToken()=="")
    {

    }
    this.emitemitter.emit(_selected);
  }
  deleteGrid(_deleted:any)
  {
debugger;
this.emitemitters.emit(_deleted);
  }

}