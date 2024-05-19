import {Component, OnInit} from '@angular/core';
import {Task} from "../../interfaces/task.interface";
import {ItemService} from "../../services/item.service";
import {MatDialog} from "@angular/material/dialog";
import {TaskNewEditComponent} from "../task-new-edit/task-new-edit.component";
import {ConfirmWindowComponent} from "../confirm-window/confirm-window.component";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

  /** list of tasks */
  public itemList: Task[] = [];
  /** amount of finished tasks */
  public taskListDone: number;

  constructor(
    private itemService: ItemService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getTask();
  }

  /**
   * gets all tasks
   */
  public getTask(): void {
    this.itemService.getAllTasks()
      .subscribe(res => {
        this.itemList = res;
        this.taskListDone = res.filter(el => el.isDone).length;
      });
  }

  /**
   * deletes task by Id
   * @param id - task Id
   */
  public deleteItem(id: number): void {
    this.itemService.deleteTask(id)
      .subscribe(res => {
        this.itemList = res;
        this.taskListDone = res.filter(el => el.isDone).length;
      });
  }

  /**
   * creates new task
   */
  public newTask(): void {
    let dialogRef = this.dialog.open(TaskNewEditComponent, {
      width: '500px',
    });

    dialogRef.afterClosed()
      .subscribe(res => {
        if(res) {
          this.itemService.createTask(res);
          this.getTask();
        }
      });
  }

  /**
   * deletes all tasks
   */
  public deleteAll(): void {
    let dialogRef = this.dialog.open(ConfirmWindowComponent, {
      width: '300px',
    });
      dialogRef.afterClosed()
        .subscribe(res => {
          if(res) {
            this.itemService.deleteAllTasks();
            this.getTask();
          }
        });
  }
}
