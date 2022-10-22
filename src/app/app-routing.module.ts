import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { EdidTaskComponent } from './edid-task/edid-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';

const routes: Routes = [
  { path: 'create-task', component: CreateTaskComponent },
  { path: 'edit-task', component: EdidTaskComponent },
  { path: '', component: ViewTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
