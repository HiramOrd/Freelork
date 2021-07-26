import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrievePasswordModalComponent } from './retrieve-password-modal.component';

describe('RetrievePasswordModalComponent', () => {
  let component: RetrievePasswordModalComponent;
  let fixture: ComponentFixture<RetrievePasswordModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrievePasswordModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrievePasswordModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
