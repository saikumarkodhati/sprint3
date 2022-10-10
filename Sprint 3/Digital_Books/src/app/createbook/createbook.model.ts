import{NgForm,FormGroup,Validators,FormBuilder,FormControl} from "@angular/forms";

export class CreateBook {

    title: string = '';
    category: string = '';
    image: string = '';
    price: string = '';
    publisher: string = '';
    active: string = '';
    content: string = '';
    id:string = '';
    author: string = '';
    releasedDate: string = '';


    formCreateBookGroup:FormGroup;
    constructor(){
        var _builder=new FormBuilder();

        this.formCreateBookGroup=_builder.group({});
        this.formCreateBookGroup.addControl("createbooktitle",new FormControl('',Validators.required));
        this.formCreateBookGroup.addControl("createbookcategory",new FormControl('',Validators.required));
       // this.formCreateBookGroup.addControl("createbookimage",new FormControl('',Validators.required));
        this.formCreateBookGroup.addControl("createbookprice",new FormControl('',Validators.required));
        this.formCreateBookGroup.addControl("createbookpublisher",new FormControl('',Validators.required));
        this.formCreateBookGroup.addControl("createbookactive",new FormControl('',Validators.required));
        this.formCreateBookGroup.addControl("createbookcontent",new FormControl('',Validators.required));
        this.formCreateBookGroup.addControl("createbookauthor",new FormControl('',Validators.required));
        this.formCreateBookGroup.addControl("createbookreleasedDate",new FormControl('',Validators.required));
       
    }
}