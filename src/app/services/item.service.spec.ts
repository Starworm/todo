import { TestBed } from '@angular/core/testing';

import { ItemService } from './item.service';
import {Task} from "../interfaces/task.interface";
import {of} from "rxjs";

describe('ItemService', () => {
  let service: ItemService;

  let itemList: Task[] = [
    {
      id: 1,
      content: 'test-1',
      isDone: false
    },
    {
      id: 2,
      content: 'test-2',
      isDone: false
    },
    {
      id: 3,
      content: 'test-3',
      isDone: false
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemService);
  });

  const task = {
      id: 11,
      content: 'test-11',
      isDone: false
    };

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all tasks', () => {
    spyOn(service, 'getAllTasks').and.returnValue(of(itemList))
    service.getAllTasks().subscribe((value) => {
      expect(value).toBe(itemList)
    });
  });

  it('should create task', () => {
    service.createTask(task).subscribe(value => {
      expect(value.length).toEqual(6)
    })
  });

  it('should edit task', () => {
    service.editTask({value: {item: '123'}, id: 1}).subscribe(value => {
      expect(service['itemList'][0].content).toEqual('123');
    })
  });

  it('should delete task by ID', () => {
    service.deleteTask(1).subscribe(value => {
      expect(service['itemList'].length).toEqual(4);
    })
  });

  it('should change task status', () => {
    service.changeStatusTask(1, false).subscribe(value => {
      expect(service['itemList'][0].isDone).toEqual(false);
    })
  });

  it('should delete all tasks', () => {
    service.deleteAllTasks();
    expect(service['itemList'].length).toEqual(0);
  });

});
