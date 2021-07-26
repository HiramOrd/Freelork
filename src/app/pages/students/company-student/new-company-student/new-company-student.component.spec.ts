import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompanyStudentComponent } from './new-company-student.component';

describe('NewCompanyStudentComponent', () => {
  let component: NewCompanyStudentComponent;
  let fixture: ComponentFixture<NewCompanyStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCompanyStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCompanyStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
