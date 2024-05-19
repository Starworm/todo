import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirm-window',
  templateUrl: './confirm-window.component.html',
  styleUrls: ['./confirm-window.component.scss']
})
export class ConfirmWindowComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  /**
   * closes window without deletion
   */
  public cancel(): void {
    this.dialogRef.close();
  }

  /**
   * closes window with deletion
   */
  public delete(): void {
    this.dialogRef.close(true);
  }
}
