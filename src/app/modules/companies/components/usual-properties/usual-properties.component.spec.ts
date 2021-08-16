import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsualPropertiesComponent } from './usual-properties.component';

describe('UsualPropertiesComponent', () => {
  let component: UsualPropertiesComponent;
  let fixture: ComponentFixture<UsualPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UsualPropertiesComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsualPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
