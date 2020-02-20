import { OnInit, ElementRef } from '@angular/core';
import { StickyHeaderContainerDirective } from './ng-sticky-header-container.directive';
export declare class StickyHeaderDirective implements OnInit {
    private appStickyHeaderContainer;
    private el;
    constructor(appStickyHeaderContainer: StickyHeaderContainerDirective, el: ElementRef);
    ngOnInit(): void;
    getParrent(el: Element): HTMLElement;
    computeOffsetTop(el: HTMLElement): number;
    getBottomTreshold(el: HTMLElement): number;
    registerSticky(): void;
}
