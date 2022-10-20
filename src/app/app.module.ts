import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { EdidTaskComponent } from './edid-task/edid-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, 
    EdidTaskComponent,
    DeleteTaskComponent,
    CreateTaskComponent,
    ViewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
