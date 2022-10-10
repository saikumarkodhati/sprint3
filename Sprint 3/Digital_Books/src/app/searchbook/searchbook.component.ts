import { Component, EventEmitter, OnInit, Output, ElementRef, ViewChild } from '@angular/core';
import { SearchBook } from './searckbook.model';
import { HttpClient } from '@angular/common/http';
import { CreateBook } from '../createbook/createbook.model';
import { Router } from '@angular/router';
import { SharedserviceService } from '../services/shared/sharedservice.service';
import { UserDetails } from './searchbook_userdetails.model';
import { LoginServiceService } from '../services/login-service.service';

declare var require: any;

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-search-book',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css']
})
export class SearchBookComponent implements OnInit {

  public authorcreat: string = '';
  public titles: string = '';
  public publisher: string = '';
  public relesed: string = '';
  public imageBaseUrl: any = "https://testimage12.blob.core.windows.net/images/";  //44339

  public readerSearchdiv: boolean = true;
  public readerGridDiv: boolean = false;
  public readerBookBuyDiv: boolean = false;
  public myOrderdiv: boolean = false;
  public Invoicediv: boolean = false;
  public btndiv:boolean = false;

  public selectedFile!: File;

  public url: string = 'https://localhost:44376/api/Books/Search';

  @Output() event = new EventEmitter<string>();

  ngOnInit(): void {
    this.GetDataFromServer();
    this.GetDataFromuser();
  }
  Success(input1: any) {
    this.SearchBookModels = input1;
  }
  Success1(input: any) {
    this.UserDetilsModels = input;
  }
  constructor(private _service: LoginServiceService, private http: HttpClient, private _router: Router, private shared: SharedserviceService) {

  }

  GetDataFromServer() {

   // this.http.get("https://localhost:44354/api/Books").subscribe(res => this.Success(res), res => console.log(res));
   this.http.get("https://localhost:44354/api/Createbook").subscribe(res => this.Success(res), res => console.log(res));
  }
  title = 'sample-project';
  imageURL = "././assets/image.jpg";
  isEdit = false;

  SearchBookModel: CreateBook = new CreateBook();
  SearchBookModels: Array<CreateBook> = new Array<CreateBook>();

  CreateBookModel: CreateBook = new CreateBook();
  CreateBookModels: Array<CreateBook> = new Array<CreateBook>();

  UserDetailsModel: UserDetails = new UserDetails();
  UserDetilsModels: Array<UserDetails> = new Array<UserDetails>();



  Add() {
    debugger;
    // console.log('HI');
    // alert('HI');

    // this.CustomerModels.push(this.CustomerModel);
    // console.log(this.CustomerModels);
    if (this.isEdit) {
      this.http.put("https://localhost:44354/api/Books", this.SearchBookModel).subscribe(res => this.PostSuccess(res), res => console.log(res))
    }
    else {
      this.http.post("https://localhost:44354/api/Books", this.SearchBookModel).subscribe(res => this.PostSuccess(res), res => console.log(res))
    }

    this.SearchBookModel = new CreateBook();
  }

  Search() {
    debugger;
    this.authorcreat = this.SearchBookModel.author;
    this.title = this.SearchBookModel.title;
    this.publisher = this.SearchBookModel.publisher;
    this.relesed = this.SearchBookModel.releasedDate;


    this.http.post(this.url + '?author=' + this.authorcreat + '& title=' + this.titles + '& publisher=' + this.publisher + '&releasedate=' + this.relesed, "").subscribe(res => this.Success(res), res => console.log(res))
    this.SearchBookModels = new Array<CreateBook>();
  }

  PostSuccess(input: any) {
    this.GetDataFromServer();
  }

  EditBook(input: any) {

    debugger;
    this._service.getToken();

    if (this._service.token == undefined) {
      this._router.navigate(['login']);
    }
    else {
      this.isEdit = true;
      this.SearchBookModel = input;
      this.event.emit(input.id);
      this.readerGridDiv = true;
      this.readerSearchdiv = false;
      this.readerBookBuyDiv = false;
      this.myOrderdiv = false;
      this.Invoicediv = false;
      this.btndiv = false;
    }


  }
  DeleteBook(input: any) {
    debugger;
    this.http.delete("https://localhost:44354/api/Books").subscribe(res => console.log(res), res => console.log(res));
    this.SearchBookModel = input;
  }
  Book(input: any) {
    this.http.put("https://localhost:44354/api/Books/Search?author=" + input.any, this.SearchBookModel).subscribe(res => this.PostSuccess(res), res => console.log(res))

  }
  Details() {
  }


  SearchAuthorByReader() {
    this.readerGridDiv = true;
    this.readerSearchdiv = false;
    this.readerBookBuyDiv = false;
    this.myOrderdiv = false;
    this.Invoicediv = false;
    this.btndiv = false;
  }
  dirSearchBooks() {
    this.readerGridDiv = false;
    this.readerSearchdiv = true;
    this.readerBookBuyDiv = false;
    this.myOrderdiv = false;
    this.Invoicediv = false;
    this.btndiv = false;
  }
  viewBook() {
    debugger;
    this.readerGridDiv = false;
    this.readerSearchdiv = false;
    this.readerBookBuyDiv = false;
    this.myOrderdiv = true;
    this.Invoicediv = false;
    this.btndiv = false;

    var DetailsUser = {

      title: this.SearchBookModel.title,
      category: this.SearchBookModel.category,
      price: this.SearchBookModel.price,
      author: this.SearchBookModel.author,
      content: this.SearchBookModel.content,
      publisher: this.SearchBookModel.publisher,
      Cardnumber: this.UserDetailsModel.cardnumber,
      Cardholdername: this.UserDetailsModel.cardholdername,
      Expiresdate: this.UserDetailsModel.expiresdate,
      Cvv: this.UserDetailsModel.cvv,
      UserId: '2',

      //id:this.CreateBookModel.id,
    };
    const uploadData = new FormData();

    uploadData.append('title', DetailsUser.title);
    uploadData.append('category', DetailsUser.category);
    uploadData.append('image', this.SearchBookModel.image);
    uploadData.append('price', DetailsUser.price);
    uploadData.append('author', DetailsUser.author);
    uploadData.append('content', DetailsUser.content);
    uploadData.append('publisher', DetailsUser.publisher);
    uploadData.append('userId', '1');
    uploadData.append('cardnumber', this.UserDetailsModel.cardnumber);
    uploadData.append('cardholdername', this.UserDetailsModel.cardholdername);
    uploadData.append('expiresdate', this.UserDetailsModel.expiresdate);
    uploadData.append('cvv', this.UserDetailsModel.cvv);

    this.http.post("https://localhost:44354/api/CreateBook/InsertUserDetails", DetailsUser).subscribe(res => this.PostSuccess(res), res => console.log(res))
this.GetDataFromuser();
  }
  searchBook() {
    this.readerGridDiv = false;
    this.readerSearchdiv = false;
    this.readerBookBuyDiv = false;
    this.myOrderdiv = true;
  }
  GetDataFromuser() {
    debugger;
    this.http.get("https://localhost:44354/api/CreateBook/Details").subscribe(res => this.Success1(res), res => console.log(res));

  }

  back()
  {
    this.readerGridDiv = false;
    this.readerSearchdiv = true;
    this.readerBookBuyDiv = false;
    this.myOrderdiv = false;
    this.Invoicediv = false;
    this.btndiv = false;
  }

  Cancel(input: any) {
    debugger;
    this.isEdit = true;
    this.UserDetailsModel = input;
    this.event.emit(input.id);

    this.readerGridDiv = false;
    this.readerSearchdiv = false;
    this.readerBookBuyDiv = false;
    this.myOrderdiv = false;
    this.Invoicediv = true;
    this.btndiv = true;

  }

  @ViewChild('pdfTable')
  pdfTable!: ElementRef;

  downloadAsPDF() {
    debugger;
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download();

    this.readerGridDiv = false;
    this.readerSearchdiv = true;
    this.readerBookBuyDiv = false;
    this.myOrderdiv = false;
    this.Invoicediv = false;
    this.btndiv = false;

  }
}
