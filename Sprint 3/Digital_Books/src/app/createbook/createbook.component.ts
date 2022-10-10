import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateBook } from './createbook.model';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  templateUrl: './createbook.component.html',
})
export class CreateBookComponent implements OnInit {

  ngOnInit(): void {
    this.GetDataFromServer();
  }

  Success(input: any) {
    console.log(input);
    this.CreateBookModels = input;
  }
  constructor(private http: HttpClient,private _service:LoginServiceService) { }

  public selectedFile!: File;

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0]
  }
  GetDataFromServer() {
   
    this.http.get("https://localhost:44354/api/CreateBook").subscribe(res => this.Success(res), res => console.log(res));
  }
  title = 'Digital_Books';
  imageURL = "././assets/image.jpg";
  public isEdit:boolean=false;

  CreateBookModel: CreateBook = new CreateBook();
  CreateBookModels: Array<CreateBook> = new Array<CreateBook>();

  Add(event: any) {
    debugger;

    var cBook = {

      title: this.CreateBookModel.title,
      category: this.CreateBookModel.category,
      price: this.CreateBookModel.price,
      publisher: this.CreateBookModel.publisher,
      active: this.CreateBookModel.active,
      content: this.CreateBookModel.content,
      id: this.CreateBookModel.id,
      author: this.CreateBookModel.author,
      releasedDate: this.CreateBookModel.releasedDate,

      //id:this.CreateBookModel.id,
    };
    const uploadData = new FormData();
    if(this.selectedFile==undefined)
    {
      uploadData.append('image', this.CreateBookModel.image);
    }
    else
    {
      uploadData.append('image', this.selectedFile, this.selectedFile.name);
    }
    
    uploadData.append('title', cBook.title);
    uploadData.append('category', cBook.category);
    uploadData.append('price', cBook.price);
    uploadData.append('publisher', cBook.publisher);
    uploadData.append('active', cBook.active);
    uploadData.append('content', cBook.content);
    // uploadData.append('id', cBook.id);
    uploadData.append('author', cBook.author);
    uploadData.append('releasedDate', cBook.releasedDate);



    if (this.isEdit) {
      uploadData.append('Id', this.CreateBookModel.id);
      this.http.put("https://localhost:44354/api/Createbook", uploadData).subscribe(res => this.PostSuccess(res), res => console.log(res))
    }
    else {
      uploadData.append('Id', '0');
      this.http.post("https://localhost:44354/api/CreateBook/Insert", uploadData).subscribe(res => this.PostSuccess(res), res => console.log(res))
    }
    this.CreateBookModel = new CreateBook();
  }
  PostSuccess(input: any) {
    this.GetDataFromServer();
  }
  EditBook(input: any) {
    debugger;
    this.isEdit = true;
    this.CreateBookModel = input;
  }
  DeleteBook(input: any) {
    debugger;
    this.http.delete("https://localhost:44354/api/Createbook?id=" + input.id).subscribe(res => this.Success(res), res => console.log(res));
    this.CreateBookModel = input;
  }

}
