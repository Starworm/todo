import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskNewEditComponent } from './task-new-edit.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";
import {MatFormFieldModule} from "@angular/material/form-field";

describe('TaskNewEditComponent', () => {
  let component: TaskNewEditComponent;
  let fixture: ComponentFixture<TaskNewEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskNewEditComponent],
      imports: [
        MatDialogModule,
        MatFormFieldModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {
            close: () => {}
          }},
        {
          provide: MAT_DIALOG_DATA, useValue: {
            item: {
              date: 'any',
              status: 'string'
            },
          }
        },
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(TaskNewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
