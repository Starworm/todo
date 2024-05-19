import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItemComponent } from './task-item.component';
import {MatDialogModule} from "@angular/material/dialog";

describe('TaskItemComponent', () => {
  let component: TaskItemComponent;
  let fixture: ComponentFixture<TaskItemComponent>;
  const task = {
    id: 11,
    content: 'test-11',
    isDone: false
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskItemComponent],
      imports: [
        MatDialogModule
      ]
    });
    fixture = TestBed.createComponent(TaskItemComponent);
    component = fixture.componentInstance;
    component.item = task;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
