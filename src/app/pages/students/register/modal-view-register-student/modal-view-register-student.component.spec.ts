import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewRegisterStudentComponent } from './modal-view-register-student.component';

describe('ModalViewRegisterStudentComponent', () => {
  let component: ModalViewRegisterStudentComponent;
  let fixture: ComponentFixture<ModalViewRegisterStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalViewRegisterStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalViewRegisterStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
