import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStickyHeaderContainer]'
})
export class StickyHeaderContainerDirective {
  constructor(public elementRef: ElementRef) {}
}
