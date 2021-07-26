import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCompanyStudentComponent } from './delete-company-student.component';

describe('DeleteCompanyStudentComponent', () => {
  let component: DeleteCompanyStudentComponent;
  let fixture: ComponentFixture<DeleteCompanyStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCompanyStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCompanyStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
