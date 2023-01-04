import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  taskForm !: FormGroup;
  actionBtn: string = 'Save'
  constructor(private formBuilder: FormBuilder, private api: ApiService, private dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public editData: any) { }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    })
    if (this.editData) {
      this.actionBtn = "Update"

      this.taskForm.controls['title'].setValue(this.editData.title)
      this.taskForm.controls['body'].setValue(this.editData.body)
    }

  }
  addProduct() {
    if (!this.editData) {
      if (this.taskForm.valid) {
        this.api.postProduct(this.taskForm.value)
          .subscribe({
            next: (res) => {
              alert('Product added succesfully')
              this.taskForm.reset()
              this.dialogRef.close('Save');
            },
            error: () => {
              alert("Error while adding the product")
            }
          })
      }
    } else {
      this.updateProduct()
    }

  }

  updateProduct() {
    this.api.putProduct(this.taskForm.value,this.editData.id)
    .subscribe({
      next: (res) => {
        alert('Product updated succesfully')
        this.taskForm.reset()
        this.dialogRef.close('update');
      },
      error: () => {
        alert("Error while adding the product")
      }
    })
  }
  clearTask() {
    this.taskForm.reset()
  }
}
