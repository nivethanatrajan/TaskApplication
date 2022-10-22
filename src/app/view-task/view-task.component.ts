import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Data } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { DialogpopupComponent } from '../shared/dialogpopup/dialogpopup.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent{
  displayedColumns: string[] = ['id', 'title', 'body','action'];
  dataSource = new MatTableDataSource<Data>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  constructor(public dialog: MatDialog,  private api:ApiService, private router: Router) { }
  
  openDialog(row:any) {
    this.dialog.open(DialogpopupComponent, {
      width: '30%',
      data:row
    });  
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() {
    this.getallTask()
  }
  getallTask() {
    this.api.viewTaskcollection().subscribe((data: any) => {
   this.dataSource.data= data 
    }) 
  }
  EditTask() {
    
  }
  deleteDialog(row:any) {  
    
      //this.dataSource = this.dataSource.filter((x: { id: any; }) => x.id != row.id);
     
  }

  
  }
   
  