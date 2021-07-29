import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineItemsComponent } from './line-items.component';

describe('LineItemsComponent', () => {
  let component: LineItemsComponent;
  let fixture: ComponentFixture<LineItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LineItemsComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
