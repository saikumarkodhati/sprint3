import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import{RouterModule} from '@angular/router';
import { createbookroute } from "../routing/createbookroute";
import { GridUIModule } from "../utilites/grid-ui/grid-ui.module";
import { CreateBookComponent } from "../createbook/createbook.component";
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginServiceService } from "../services/login-service.service";
import { Tokeninceptorsservice } from "../services/tokenInceptorsservice";
import { PaymentComponent } from "./payment.component";
import { registerData } from "../model/register";

@NgModule({
    declarations:[
        CreateBookComponent,
        PaymentComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(createbookroute),
        GridUIModule,
        HttpClientModule
    ],
    providers:[LoginServiceService,{provide:HTTP_INTERCEPTORS,useClass:Tokeninceptorsservice,multi:true}],
    bootstrap:[CreateBookComponent]
})
export class CreatebookModule{}


















