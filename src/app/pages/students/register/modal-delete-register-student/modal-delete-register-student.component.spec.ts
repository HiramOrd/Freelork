import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteRegisterStudentComponent } from './modal-delete-register-student.component';

describe('ModalDeleteRegisterStudentComponent', () => {
  let component: ModalDeleteRegisterStudentComponent;
  let fixture: ComponentFixture<ModalDeleteRegisterStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteRegisterStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteRegisterStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
