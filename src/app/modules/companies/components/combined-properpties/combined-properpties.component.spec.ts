import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinedProperptiesComponent } from './combined-properpties.component';

describe('ShorttextDictionaryComponent', () => {
  let component: CombinedProperptiesComponent;
  let fixture: ComponentFixture<CombinedProperptiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CombinedProperptiesComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinedProperptiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
