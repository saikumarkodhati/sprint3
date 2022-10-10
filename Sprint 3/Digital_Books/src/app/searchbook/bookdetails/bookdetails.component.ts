import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {


  public readerSearchdiv:boolean=true;
  public readerGridDiv:boolean=false;
  public readerBookBuyDiv:boolean=false;
  public myOrderdiv:boolean=false;


  ReadMore:boolean = false
  //hiding info box
  visible:boolean = true
  constructor() { }

  ngOnInit(): void {
  }

  onclick()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible
  }


  SearchAuthorByReader()
  {
    this.readerSearchdiv=false; 
    this.readerGridDiv=true;
    this.readerBookBuyDiv=false;
    this.myOrderdiv=false;
  }
  dirSearchBooks(){
    this.readerSearchdiv=true; 
    this.readerGridDiv=false;
   this.readerBookBuyDiv=false;
   this.myOrderdiv=false;
  }
  viewBook(){
    console.log("view book");
    this.readerSearchdiv=false; 
    this.readerGridDiv=true;
    this.readerBookBuyDiv=false;
    this.myOrderdiv=false;
  }
  searchBook(){
    console.log("search book");
    this.readerSearchdiv=true; 
    this.readerGridDiv=false;
    this.readerBookBuyDiv=false;
    this.myOrderdiv=false;
  }

}
