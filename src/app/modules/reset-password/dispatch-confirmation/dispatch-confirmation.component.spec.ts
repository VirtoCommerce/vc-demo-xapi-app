import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchConfirmationComponent } from './dispatch-confirmation.component';

describe('DispatchConfirmationComponent', () => {
  let component: DispatchConfirmationComponent;
  let fixture: ComponentFixture<DispatchConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DispatchConfirmationComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
