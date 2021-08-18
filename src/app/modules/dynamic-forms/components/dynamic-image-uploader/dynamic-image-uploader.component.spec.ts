import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicImageUploaderComponent } from './dynamic-image-uploader.component';

describe('DynamicImageUploaderComponent', () => {
  let component: DynamicImageUploaderComponent;
  let fixture: ComponentFixture<DynamicImageUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicImageUploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicImageUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
