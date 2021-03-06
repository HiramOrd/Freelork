import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsTableComponent } from './students-table.component';

describe('RegisterComponent', () => {
  let component: StudentsTableComponent;
  let fixture: ComponentFixture<StudentsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
