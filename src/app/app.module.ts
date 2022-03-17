import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TemplateModule } from './template/template.module';
import { HttpClientModule } from '@angular/common/http';
import { MessagingModule } from './messaging/messaging.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
	HttpClientModule,
	TemplateModule,
	MessagingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
