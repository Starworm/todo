import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../../interfaces/task.interface";
import {ItemService} from "../../services/item.service";
import {TaskNewEditComponent} from "../task-new-edit/task-new-edit.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {

  /** displayed task */
  @Input() public item: Task;
  /** flag of task finishing */
  public isDone = false;
  /** emitter for deletion task */
  @Output() public deleteEmitter: EventEmitter<any> = new EventEmitter<any>();
  /** emitter for finishing task */
  @Output() public doneEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private itemService: ItemService,
    private dialog: MatDialog
  ) { }

  /**
   * finishes task
   * @param id - task id
   */
  public taskDone(id: number): void {
    this.isDone = !this.isDone;
    this.itemService.changeStatusTask(id, this.isDone).subscribe(() => {
      this.doneEmitter.emit();
    });
  }

  /**
   * deletes task
   * @param id - task id
   */
  public deleteTask(id: number): void {
    this.deleteEmitter.emit(id);
  }

  /**
   * edits tasks
   * @param task - edited task
   */
  public editTask(task: Task): void {
    let dialogRef = this.dialog.open(TaskNewEditComponent, {
      width: '500px',
      data: {value: task.content, id: task.id}
    });

    dialogRef.afterClosed()
      .subscribe(res => {
        if(res) {
          this.itemService.editTask(res);
        }
      });
  }
}
