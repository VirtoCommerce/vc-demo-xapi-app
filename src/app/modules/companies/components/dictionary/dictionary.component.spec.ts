import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryProperptiesComponent } from './dictionary.component';

describe('ShorttextDictionaryComponent', () => {
  let component: DictionaryProperptiesComponent;
  let fixture: ComponentFixture<DictionaryProperptiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DictionaryProperptiesComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryProperptiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
