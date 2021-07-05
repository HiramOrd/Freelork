import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteGroupComponent } from './modal-delete-group.component';

describe('ModalDeleteGroupComponent', () => {
  let component: ModalDeleteGroupComponent;
  let fixture: ComponentFixture<ModalDeleteGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
