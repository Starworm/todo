import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksListComponent } from './tasks-list.component';
import {MatDialogModule} from "@angular/material/dialog";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('TasksListComponent', () => {
  let component: TasksListComponent;
  let fixture: ComponentFixture<TasksListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksListComponent],
      imports: [
        MatDialogModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(TasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
