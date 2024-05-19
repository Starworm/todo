import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmWindowComponent } from './confirm-window.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";

describe('ConfirmWindowComponent', () => {
  let component: ConfirmWindowComponent;
  let fixture: ComponentFixture<ConfirmWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmWindowComponent],
      imports: [
        MatDialogModule
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
      ]
    });
    fixture = TestBed.createComponent(ConfirmWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
