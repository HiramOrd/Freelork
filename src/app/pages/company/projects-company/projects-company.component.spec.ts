import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsCompanyComponent } from './projects-company.component';

describe('ProjectsCompanyComponent', () => {
  let component: ProjectsCompanyComponent;
  let fixture: ComponentFixture<ProjectsCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
