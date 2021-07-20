import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleguideComponent } from './styleguide.component';

describe('StyleguideComponent', () => {
  let component: StyleguideComponent;
  let nativeElement: HTMLElement;
  let fixture: ComponentFixture<StyleguideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        StyleguideComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleguideComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have specified height for medium input', () => {
    const inputDefault = nativeElement.querySelector('#inputDefault');
    const expectedHeight = 34;
    expect(inputDefault?.clientHeight).toBe(expectedHeight);
  });

  it('should have specified height for large input', () => {
    const inputLarge = nativeElement.querySelector('#inputLarge');
    const expectedHeight = 46;
    expect(inputLarge?.clientHeight).toBe(expectedHeight);
  });

  it('should have specified height for medium button', () => {
    const buttonDefault = nativeElement.querySelector('#buttonDefault');
    const expectedHeight = 34;
    expect(buttonDefault?.clientHeight).toBe(expectedHeight);
  });

  it('should have specified height for large button', () => {
    const buttonLarge = nativeElement.querySelector('#buttonLarge');
    const expectedHeight = 42;
    expect(buttonLarge?.clientHeight).toBe(expectedHeight);
  });
});
