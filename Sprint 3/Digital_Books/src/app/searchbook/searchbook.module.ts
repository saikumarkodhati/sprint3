import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { searchbookroute } from "../routing/searchbookroute";
import { GridUIModule } from "../utilites/grid-ui/grid-ui.module";
import { SearchBookComponent } from "./searchbook.component";
import { HttpClientModule } from "@angular/common/http";
import { ReadUIModule } from "../utilites/read-ui/read-ui.module";
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { OrderUIModule } from "../utilites/order-ui/order-ui.module";

@NgModule({
    declarations:[
        SearchBookComponent,
        BookdetailsComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(searchbookroute),
        GridUIModule,
        ReadUIModule,
        OrderUIModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [SearchBookComponent]
  })
  export class SearchBookModule { }












