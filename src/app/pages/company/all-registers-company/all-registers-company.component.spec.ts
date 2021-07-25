import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRegistersCompanyComponent } from './all-registers-company.component';

describe('AllRegistersCompanyComponent', () => {
  let component: AllRegistersCompanyComponent;
  let fixture: ComponentFixture<AllRegistersCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRegistersCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRegistersCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
