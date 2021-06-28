import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsProjectsComponent } from './students-projects.component';

describe('ProjectsComponent', () => {
  let component: StudentsProjectsComponent;
  let fixture: ComponentFixture<StudentsProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
