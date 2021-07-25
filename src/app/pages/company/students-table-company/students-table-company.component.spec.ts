import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsTableCompanyComponent } from './students-table-company.component';

describe('StudentsTableCompanyComponent', () => {
  let component: StudentsTableCompanyComponent;
  let fixture: ComponentFixture<StudentsTableCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsTableCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsTableCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
