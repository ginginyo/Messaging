import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCustomComponent } from './header-custom/header-custom.component';
import { SidebarCustomComponent } from './sidebar-custom/sidebar-custom.component';



@NgModule({
  declarations: [
    HeaderCustomComponent,
    SidebarCustomComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderCustomComponent,
    SidebarCustomComponent
  ]
})
export class TemplateModule { }
