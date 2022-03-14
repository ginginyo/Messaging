import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages/messages.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    MessagesComponent,
    FormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MessagingModule { }
