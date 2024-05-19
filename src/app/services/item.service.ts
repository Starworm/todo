import {Injectable} from '@angular/core';
import {Task} from "../interfaces/task.interface";
import {Observable, of, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemList: Task[] = [
    {
      id: 1,
      content: 'buy food',
      isDone: false
    },
    {
      id: 2,
      content: 'do the housework',
      isDone: false
    },
    {
      id: 3,
      content: 'wash clothes',
      isDone: false
    },
    {
      id: 4,
      content: 'call Susan to explain that I fault myself for that dance with Kate',
      isDone: false
    },
    {
      id: 5,
      content: 'call Kate and ask her going for a walk next week',
      isDone: false
    },

  ];

  constructor() {
  }

  /**
   * returns all tasks in list
   */
  public getAllTasks(): Observable<Task[]> {
    return of([...this.itemList]);
  }

  /**
   * creates new task
   * @param taskData - task data
   */
  public createTask(taskData: any) {
    let task: Task = {
      id: this.itemList.length+1,
      isDone: false,
      content: taskData.item
    };
    this.itemList.push(task);
    return of([...this.itemList]);
  }

  /**
   * edits existed tasks
   * @param task - edited task
   */
  public editTask(task: any) {
    const item = this.itemList.find(el => el.id === task.id);
    if (item) {
      item.content = task.value.item;
      return of([...this.itemList]);
    } else {
      const errorMessage = 'No task found!'
      return throwError(() => errorMessage);
    }
  }

  /**
   * deletes existed task
   * @param id - deleted task id
   */
  public deleteTask(id: number): Observable<Task[]> {
    const ind = this.itemList.findIndex(el => el.id === id);
    this.itemList.splice(ind, 1);
    return of([...this.itemList]);
  }

  /**
   * changes task status
   * @param id - task id
   * @param status - current status (done / undone)
   */
  public changeStatusTask(id: number, status: boolean) {
    const item = this.itemList.find(el => el.id === id);
    if (item) {
      item.isDone = status;
      return of({});
    } else {
      const errorMessage = 'No task found!'
      return throwError(() => errorMessage);
    }
  }

  /**
   * removes all tasks
   */
  public deleteAllTasks() {
    this.itemList = [];
  }
}
