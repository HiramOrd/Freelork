import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectCompanyComponent } from './new-project-company.component';

describe('NewProjectCompanyComponent', () => {
  let component: NewProjectCompanyComponent;
  let fixture: ComponentFixture<NewProjectCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProjectCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
