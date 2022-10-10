import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SignUpComponent } from './sign-up.component';
import { FormsModule } from '@angular/forms';
import { registerData } from 'src/app/model/register';
import { ReactiveFormsModule } from '@angular/forms';
import { register } from './sign-up.model';

@NgModule({
    declarations: [
        SignUpComponent
        
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
        //register
    ],
    exports:[SignUpComponent,CommonModule]
  })
  export class SignUpModule { }