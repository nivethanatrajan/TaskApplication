import {  Component, ViewChild,OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Data } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { DialogpopupComponent } from '../shared/dialogpopup/dialogpopup.component';
import { Router } from '@angular/router';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit{
  displayedColumns: string[] = ['id','userid', 'title', 'body','action'];
  dataSource = new MatTableDataSource<Data>; 

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog,  private api:ApiService  ) { }
  
  openDialog(row:any) {
    this.dialog.open(DialogpopupComponent, {
      width: '50%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val == 'save'){
        this.getallTask();
      }
    }); 
  } 
  ngOnInit() {
    this.getallTask()
  }
  getallTask() {
    this.api.getTaskcollection().subscribe({
      next:(res)=>{
       this.dataSource = new MatTableDataSource(res)
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort
      },
      error:(err)=>{
alert("Error while fetching the records!")
      }
    })
  }

  
  deleteProduct(id:number){
    this.api.deleteProduct(id)
    .subscribe({
      next:(res)=>{
      alert("Product Deleted Successfully")
      this.getallTask();
      },
      error:(err)=>{
        alert("error while deleting the product")
      }
    })
  
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  }
   
  