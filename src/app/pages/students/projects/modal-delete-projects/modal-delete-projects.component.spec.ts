import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteProjectsComponent } from './modal-delete-projects.component';

describe('ModalDeleteProjectsComponent', () => {
  let component: ModalDeleteProjectsComponent;
  let fixture: ComponentFixture<ModalDeleteProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
