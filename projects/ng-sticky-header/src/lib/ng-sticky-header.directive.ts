import { Directive, OnInit, ElementRef } from '@angular/core';
import { StickyHeaderContainerDirective } from './ng-sticky-header-container.directive';

@Directive({
  selector: '[appStickyHeader]'
})
export class StickyHeaderDirective implements OnInit {
  constructor(private appStickyHeaderContainer: StickyHeaderContainerDirective, private el: ElementRef) {}

  ngOnInit(): void {
    this.registerSticky();
  }

  getParrent(el: Element): HTMLElement {
    return el.parentElement;
  }

  computeOffsetTop(el: HTMLElement): number {
    const getOffset = (elToCheck: HTMLElement): number => elToCheck.offsetTop;
    let totalOffset = 0;
    do {
      totalOffset += getOffset(el);
      el = el.offsetParent as HTMLElement;
    } while (el);
    return totalOffset;
  }

  getBottomTreshold(el: HTMLElement): number {
    return this.computeOffsetTop(el) + el.offsetHeight;
  }

  registerSticky() {
    let fixedGuard = false;
    let absoluteGuard = false;
    let offsetTop;

    const listener = () => {
      const widthToSet = this.appStickyHeaderContainer.elementRef.nativeElement.offsetWidth;
      const leftToSet = this.appStickyHeaderContainer.elementRef.nativeElement.getBoundingClientRect().left;
      const parrent = this.getParrent(this.el.nativeElement as Element);
      if (!fixedGuard && !absoluteGuard) {
        offsetTop = this.computeOffsetTop(this.el.nativeElement);
      }
      this.el.nativeElement.style.zIndex = 100;
      const bottomTreshold = this.getBottomTreshold(parrent);
      parrent.style.position = 'relative';
      if (window.scrollY >= offsetTop && offsetTop !== 0) {
        parrent.style.paddingTop = `${this.el.nativeElement.offsetHeight}px`;
        this.el.nativeElement.style.position = 'fixed';
        this.el.nativeElement.style.top = 0;
        this.el.nativeElement.style.bottom = undefined;
        this.el.nativeElement.style.width = `${widthToSet}px`;
        this.el.nativeElement.style.left = `${leftToSet}px`;
        fixedGuard = true;
      } else {
        this.el.nativeElement.style.top = 0;
        this.el.nativeElement.style.bottom = ``;
        this.el.nativeElement.style.width = ``;
        this.el.nativeElement.style.left = ``;
        parrent.style.paddingTop = '0px';
        this.el.nativeElement.style.position = 'static';
        fixedGuard = absoluteGuard = false;
      }
      if (window.scrollY >= bottomTreshold - this.el.nativeElement.offsetHeight && bottomTreshold !== 0) {
        this.el.nativeElement.style.position = 'absolute';
        this.el.nativeElement.style.width = `100%`;
        this.el.nativeElement.style.left = `${leftToSet -
        this.el.nativeElement.offsetParent.getBoundingClientRect().left}px`;
        this.el.nativeElement.style.bottom = 0;
        this.el.nativeElement.style.top = '';
        absoluteGuard = true;
      }
    };

    window.addEventListener('scroll', listener);
    window.addEventListener('resize', listener);
  }
}
