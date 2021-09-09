import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultilingualPropertiesComponent } from './multilingual-properties.component';

describe('MultilanguagePropertiesComponent', () => {
  let component: MultilingualPropertiesComponent;
  let fixture: ComponentFixture<MultilingualPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MultilingualPropertiesComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultilingualPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
