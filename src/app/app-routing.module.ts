import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { CreateTaskComponent } from './create-task/create-task.component';
import { EdidTaskComponent } from './edit-task/edit-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';

const routes: Routes = [  

  { path: '', component: ViewTaskComponent },
  { path: 'createtask', component:  CreateTaskComponent },
  { path: 'edittask', component: EdidTaskComponent },  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
