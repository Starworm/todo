import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-task-new-edit',
  templateUrl: './task-new-edit.component.html',
  styleUrls: ['./task-new-edit.component.scss']
})
export class TaskNewEditComponent {

  /** title of pop-up window (New task or Edit task) */
  public formTitle: string;
  /** form for create/edit task */
  public taskForm = new FormGroup({
    item: new FormControl(this.data && this.data.value ? this.data.value : '')
  })
  constructor(
    public dialogRef: MatDialogRef<TaskNewEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formTitle = this.data ? 'Edit Task' : 'New Task';
  }

  /** closes pop-up window without saving */
  public cancel(): void {
    this.dialogRef.close();
  }

  /** closes pop-up window with saving */
  public save(): void {
    if(this.data) {
      this.data.value = this.taskForm.value;
      this.dialogRef.close(this.data);
    } else {
      this.dialogRef.close(this.taskForm.value);
    }
  }
}
