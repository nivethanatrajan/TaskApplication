import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EdidTaskComponent } from './edit-task/edit-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogpopupComponent } from './shared/dialogpopup/dialogpopup.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import {MatTooltipModule} from '@angular/material/tooltip'; 

 
 
import {MatFormFieldModule} from '@angular/material/form-field'; 

@NgModule({
  declarations: [
    AppComponent,
    EdidTaskComponent,
    DeleteTaskComponent,
    CreateTaskComponent,
    ViewTaskComponent,
    HeaderComponent,
    DialogpopupComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSortModule,
    MatTooltipModule,MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
