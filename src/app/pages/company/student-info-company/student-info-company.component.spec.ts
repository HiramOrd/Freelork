import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInfoCompanyComponent } from './student-info-company.component';

describe('StudentInfoCompanyComponent', () => {
  let component: StudentInfoCompanyComponent;
  let fixture: ComponentFixture<StudentInfoCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentInfoCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentInfoCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
