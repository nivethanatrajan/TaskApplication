import {Component, Inject} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-dialogpopup',
  templateUrl: './dialogpopup.component.html',
  styleUrls: ['./dialogpopup.component.css']
})
export class DialogpopupComponent {
  taskTitle: any;
  taskDescription: any;
  
  

  constructor(private api: ApiService, @Inject(MAT_DIALOG_DATA) public viewData: any) { }

  ngOnInit(): void {
   
    this.api.viewTask(this.viewData.id).subscribe(
      (data: any) => {
          this.taskTitle = data.title;
          this.taskDescription = data.body; 
       
      })
      
     

  }
}