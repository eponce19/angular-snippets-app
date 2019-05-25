import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [ModalWindowComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    ModalWindowComponent
  ]
})
export class UtilityComponentModule { }
