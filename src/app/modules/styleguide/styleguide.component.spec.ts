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
    expect(inputDefault?.clientHeight).toBe(34);
  });

  it('should have specified height for large input', () => {
    const inputLarge = nativeElement.querySelector('#inputLarge');
    expect(inputLarge?.clientHeight).toBe(46);
  });

  it('should have specified height for medium button', () => {
    const buttonDefault = nativeElement.querySelector('#buttonDefault');
    expect(buttonDefault?.clientHeight).toBe(34);
  });

  it('should have specified height for large button', () => {
    const buttonLarge = nativeElement.querySelector('#buttonLarge');
    expect(buttonLarge?.clientHeight).toBe(42);
  });
});
