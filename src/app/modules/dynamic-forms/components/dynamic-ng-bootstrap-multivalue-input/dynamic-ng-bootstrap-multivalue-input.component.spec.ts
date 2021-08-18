import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicNgBootstrapMultivalueInputComponent } from './dynamic-ng-bootstrap-multivalue-input.component';

describe('DynamicNgBootstrapMultivalueInputComponent', () => {
  let component: DynamicNgBootstrapMultivalueInputComponent;
  let fixture: ComponentFixture<DynamicNgBootstrapMultivalueInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DynamicNgBootstrapMultivalueInputComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicNgBootstrapMultivalueInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
