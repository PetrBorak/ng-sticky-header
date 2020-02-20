/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
import { StickyHeaderContainerDirective } from './ng-sticky-header-container.directive';
export class StickyHeaderDirective {
    /**
     * @param {?} appStickyHeaderContainer
     * @param {?} el
     */
    constructor(appStickyHeaderContainer, el) {
        this.appStickyHeaderContainer = appStickyHeaderContainer;
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.registerSticky();
    }
    /**
     * @param {?} el
     * @return {?}
     */
    getParrent(el) {
        return el.parentElement;
    }
    /**
     * @param {?} el
     * @return {?}
     */
    computeOffsetTop(el) {
        /** @type {?} */
        const getOffset = (/**
         * @param {?} elToCheck
         * @return {?}
         */
        (elToCheck) => elToCheck.offsetTop);
        /** @type {?} */
        let totalOffset = 0;
        do {
            totalOffset += getOffset(el);
            el = (/** @type {?} */ (el.offsetParent));
        } while (el);
        return totalOffset;
    }
    /**
     * @param {?} el
     * @return {?}
     */
    getBottomTreshold(el) {
        return this.computeOffsetTop(el) + el.offsetHeight;
    }
    /**
     * @return {?}
     */
    registerSticky() {
        /** @type {?} */
        let fixedGuard = false;
        /** @type {?} */
        let absoluteGuard = false;
        /** @type {?} */
        let offsetTop;
        /** @type {?} */
        const listener = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const widthToSet = this.appStickyHeaderContainer.elementRef.nativeElement.offsetWidth;
            /** @type {?} */
            const leftToSet = this.appStickyHeaderContainer.elementRef.nativeElement.getBoundingClientRect().left;
            /** @type {?} */
            const parrent = this.getParrent((/** @type {?} */ (this.el.nativeElement)));
            if (!fixedGuard && !absoluteGuard) {
                offsetTop = this.computeOffsetTop(this.el.nativeElement);
            }
            this.el.nativeElement.style.zIndex = 100;
            /** @type {?} */
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
            }
            else {
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
        });
        window.addEventListener('scroll', listener);
        window.addEventListener('resize', listener);
    }
}
StickyHeaderDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appStickyHeader]'
            },] }
];
/** @nocollapse */
StickyHeaderDirective.ctorParameters = () => [
    { type: StickyHeaderContainerDirective },
    { type: ElementRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StickyHeaderDirective.prototype.appStickyHeaderContainer;
    /**
     * @type {?}
     * @private
     */
    StickyHeaderDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc3RpY2t5LWhlYWRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYm9yYWsvbmctc3RpY2t5LWhlYWRlci8iLCJzb3VyY2VzIjpbImxpYi9uZy1zdGlja3ktaGVhZGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFLeEYsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUFDaEMsWUFBb0Isd0JBQXdELEVBQVUsRUFBYztRQUFoRiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQWdDO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFHLENBQUM7Ozs7SUFFeEcsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxFQUFXO1FBQ3BCLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQWU7O2NBQ3hCLFNBQVM7Ozs7UUFBRyxDQUFDLFNBQXNCLEVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUE7O1lBQ3JFLFdBQVcsR0FBRyxDQUFDO1FBQ25CLEdBQUc7WUFDRCxXQUFXLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzdCLEVBQUUsR0FBRyxtQkFBQSxFQUFFLENBQUMsWUFBWSxFQUFlLENBQUM7U0FDckMsUUFBUSxFQUFFLEVBQUU7UUFDYixPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQWU7UUFDL0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQztJQUNyRCxDQUFDOzs7O0lBRUQsY0FBYzs7WUFDUixV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RUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsU0FBUztvQkFDL0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSSxJQUFJLENBQUM7Z0JBQ3BFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztnQkFDckMsYUFBYSxHQUFHLElBQUksQ0FBQzthQUN0QjtRQUNILENBQUMsQ0FBQTtRQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7WUF6RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7YUFDOUI7Ozs7WUFKUSw4QkFBOEI7WUFEWCxVQUFVOzs7Ozs7O0lBT3hCLHlEQUFnRTs7Ozs7SUFBRSxtQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RpY2t5SGVhZGVyQ29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9uZy1zdGlja3ktaGVhZGVyLWNvbnRhaW5lci5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwU3RpY2t5SGVhZGVyXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RpY2t5SGVhZGVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcHBTdGlja3lIZWFkZXJDb250YWluZXI6IFN0aWNreUhlYWRlckNvbnRhaW5lckRpcmVjdGl2ZSwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlZ2lzdGVyU3RpY2t5KCk7XG4gIH1cblxuICBnZXRQYXJyZW50KGVsOiBFbGVtZW50KTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiBlbC5wYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgY29tcHV0ZU9mZnNldFRvcChlbDogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICAgIGNvbnN0IGdldE9mZnNldCA9IChlbFRvQ2hlY2s6IEhUTUxFbGVtZW50KTogbnVtYmVyID0+IGVsVG9DaGVjay5vZmZzZXRUb3A7XG4gICAgbGV0IHRvdGFsT2Zmc2V0ID0gMDtcbiAgICBkbyB7XG4gICAgICB0b3RhbE9mZnNldCArPSBnZXRPZmZzZXQoZWwpO1xuICAgICAgZWwgPSBlbC5vZmZzZXRQYXJlbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgfSB3aGlsZSAoZWwpO1xuICAgIHJldHVybiB0b3RhbE9mZnNldDtcbiAgfVxuXG4gIGdldEJvdHRvbVRyZXNob2xkKGVsOiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY29tcHV0ZU9mZnNldFRvcChlbCkgKyBlbC5vZmZzZXRIZWlnaHQ7XG4gIH1cblxuICByZWdpc3RlclN0aWNreSgpIHtcbiAgICBsZXQgZml4ZWRHdWFyZCA9IGZhbHNlO1xuICAgIGxldCBhYnNvbHV0ZUd1YXJkID0gZmFsc2U7XG4gICAgbGV0IG9mZnNldFRvcDtcblxuICAgIGNvbnN0IGxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgY29uc3Qgd2lkdGhUb1NldCA9IHRoaXMuYXBwU3RpY2t5SGVhZGVyQ29udGFpbmVyLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgIGNvbnN0IGxlZnRUb1NldCA9IHRoaXMuYXBwU3RpY2t5SGVhZGVyQ29udGFpbmVyLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgY29uc3QgcGFycmVudCA9IHRoaXMuZ2V0UGFycmVudCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudCk7XG4gICAgICBpZiAoIWZpeGVkR3VhcmQgJiYgIWFic29sdXRlR3VhcmQpIHtcbiAgICAgICAgb2Zmc2V0VG9wID0gdGhpcy5jb21wdXRlT2Zmc2V0VG9wKHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuekluZGV4ID0gMTAwO1xuICAgICAgY29uc3QgYm90dG9tVHJlc2hvbGQgPSB0aGlzLmdldEJvdHRvbVRyZXNob2xkKHBhcnJlbnQpO1xuICAgICAgcGFycmVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPj0gb2Zmc2V0VG9wICYmIG9mZnNldFRvcCAhPT0gMCkge1xuICAgICAgICBwYXJyZW50LnN0eWxlLnBhZGRpbmdUb3AgPSBgJHt0aGlzLmVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0fXB4YDtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IDA7XG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5ib3R0b20gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3dpZHRoVG9TZXR9cHhgO1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9IGAke2xlZnRUb1NldH1weGA7XG4gICAgICAgIGZpeGVkR3VhcmQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IDA7XG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5ib3R0b20gPSBgYDtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gYGA7XG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gYGA7XG4gICAgICAgIHBhcnJlbnQuc3R5bGUucGFkZGluZ1RvcCA9ICcwcHgnO1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcbiAgICAgICAgZml4ZWRHdWFyZCA9IGFic29sdXRlR3VhcmQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+PSBib3R0b21UcmVzaG9sZCAtIHRoaXMuZWwubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgJiYgYm90dG9tVHJlc2hvbGQgIT09IDApIHtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gYDEwMCVgO1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9IGAke2xlZnRUb1NldCAtXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5vZmZzZXRQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdH1weGA7XG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5ib3R0b20gPSAwO1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gJyc7XG4gICAgICAgIGFic29sdXRlR3VhcmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgbGlzdGVuZXIpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBsaXN0ZW5lcik7XG4gIH1cbn1cbiJdfQ==