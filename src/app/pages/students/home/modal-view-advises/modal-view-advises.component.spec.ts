import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewAdvisesComponent } from './modal-view-advises.component';

describe('ModalViewAdvisesComponent', () => {
  let component: ModalViewAdvisesComponent;
  let fixture: ComponentFixture<ModalViewAdvisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalViewAdvisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalViewAdvisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
