import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrderUiComponent } from './order-ui.component';

@NgModule({
    declarations: [
      OrderUiComponent
    ],
    imports: [CommonModule],
    exports:[OrderUiComponent,CommonModule]
  })
  export class OrderUIModule { }