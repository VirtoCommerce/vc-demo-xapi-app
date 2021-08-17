import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicNgxCodemirorComponent } from './dynamic-ngx-codemiror.component';

describe('DynamicNgxCodemirorComponent', () => {
  let component: DynamicNgxCodemirorComponent;
  let fixture: ComponentFixture<DynamicNgxCodemirorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicNgxCodemirorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicNgxCodemirorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
