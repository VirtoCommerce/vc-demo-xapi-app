import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[vcImageFallback]',
})
export class ImageFallbackDirective {
  @Input() vcImageFallback?: string;

  constructor(private readonly elementRef: ElementRef) { }

  @HostListener('error')
  loadFallback(): void {
    const element = this.elementRef.nativeElement as HTMLImageElement;
    element.src = this.vcImageFallback ?? '';
  }
}
