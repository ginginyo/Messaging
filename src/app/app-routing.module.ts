import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './messaging/form/form.component';
import { MessagesComponent } from './messaging/messages/messages.component';

const routes: Routes = [
	{
		path: 'messages', component:MessagesComponent
	},
	{
		path: 'form', component:FormComponent
	}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
