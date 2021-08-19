import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultivalueInputComponent } from './multivalue-input.component';

describe('MultivalueInputComponent', () => {
  let component: MultivalueInputComponent;
  let fixture: ComponentFixture<MultivalueInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MultivalueInputComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultivalueInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
