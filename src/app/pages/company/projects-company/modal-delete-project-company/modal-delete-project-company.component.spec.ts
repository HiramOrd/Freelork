import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteProjectCompanyComponent } from './modal-delete-project-company.component';

describe('ModalDeleteProjectCompanyComponent', () => {
  let component: ModalDeleteProjectCompanyComponent;
  let fixture: ComponentFixture<ModalDeleteProjectCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteProjectCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteProjectCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
