/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
import { StickyHeaderContainerDirective } from './ng-sticky-header-container.directive';
var StickyHeaderDirective = /** @class */ (function () {
    function StickyHeaderDirective(appStickyHeaderContainer, el) {
        this.appStickyHeaderContainer = appStickyHeaderContainer;
        this.el = el;
    }
    /**
     * @return {?}
     */
    StickyHeaderDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.registerSticky();
    };
    /**
     * @param {?} el
     * @return {?}
     */
    StickyHeaderDirective.prototype.getParrent = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        return el.parentElement;
    };
    /**
     * @param {?} el
     * @return {?}
     */
    StickyHeaderDirective.prototype.computeOffsetTop = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        /** @type {?} */
        var getOffset = (/**
         * @param {?} elToCheck
         * @return {?}
         */
        function (elToCheck) { return elToCheck.offsetTop; });
        /** @type {?} */
        var totalOffset = 0;
        do {
            totalOffset += getOffset(el);
            el = (/** @type {?} */ (el.offsetParent));
        } while (el);
        return totalOffset;
    };
    /**
     * @param {?} el
     * @return {?}
     */
    StickyHeaderDirective.prototype.getBottomTreshold = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        return this.computeOffsetTop(el) + el.offsetHeight;
    };
    /**
     * @return {?}
     */
    StickyHeaderDirective.prototype.registerSticky = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var fixedGuard = false;
        /** @type {?} */
        var absoluteGuard = false;
        /** @type {?} */
        var offsetTop;
        /** @type {?} */
        var listener = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var widthToSet = _this.appStickyHeaderContainer.elementRef.nativeElement.offsetWidth;
            /** @type {?} */
            var leftToSet = _this.appStickyHeaderContainer.elementRef.nativeElement.getBoundingClientRect().left;
            /** @type {?} */
            var parrent = _this.getParrent((/** @type {?} */ (_this.el.nativeElement)));
            if (!fixedGuard && !absoluteGuard) {
                offsetTop = _this.computeOffsetTop(_this.el.nativeElement);
            }
            _this.el.nativeElement.style.zIndex = 100;
            /** @type {?} */
            var bottomTreshold = _this.getBottomTreshold(parrent);
            parrent.style.position = 'relative';
            if (window.scrollY >= offsetTop && offsetTop !== 0) {
                parrent.style.paddingTop = _this.el.nativeElement.offsetHeight + "px";
                _this.el.nativeElement.style.position = 'fixed';
                _this.el.nativeElement.style.top = 0;
                _this.el.nativeElement.style.bottom = undefined;
                _this.el.nativeElement.style.width = widthToSet + "px";
                _this.el.nativeElement.style.left = leftToSet + "px";
                fixedGuard = true;
            }
            else {
                _this.el.nativeElement.style.top = 0;
                _this.el.nativeElement.style.bottom = "";
                _this.el.nativeElement.style.width = "";
                _this.el.nativeElement.style.left = "";
                parrent.style.paddingTop = '0px';
                _this.el.nativeElement.style.position = 'static';
                fixedGuard = absoluteGuard = false;
            }
            if (window.scrollY >= bottomTreshold - _this.el.nativeElement.offsetHeight && bottomTreshold !== 0) {
                _this.el.nativeElement.style.position = 'absolute';
                _this.el.nativeElement.style.width = "100%";
                _this.el.nativeElement.style.left = leftToSet -
                    _this.el.nativeElement.offsetParent.getBoundingClientRect().left + "px";
                _this.el.nativeElement.style.bottom = 0;
                _this.el.nativeElement.style.top = '';
                absoluteGuard = true;
            }
        });
        window.addEventListener('scroll', listener);
        window.addEventListener('resize', listener);
    };
    StickyHeaderDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appStickyHeader]'
                },] }
    ];
    /** @nocollapse */
    StickyHeaderDirective.ctorParameters = function () { return [
        { type: StickyHeaderContainerDirective },
        { type: ElementRef }
    ]; };
    return StickyHeaderDirective;
}());
export { StickyHeaderDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc3RpY2t5LWhlYWRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYm9yYWsvbmctc3RpY2t5LWhlYWRlci8iLCJzb3VyY2VzIjpbImxpYi9uZy1zdGlja3ktaGVhZGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFeEY7SUFJRSwrQkFBb0Isd0JBQXdELEVBQVUsRUFBYztRQUFoRiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQWdDO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFHLENBQUM7Ozs7SUFFeEcsd0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsMENBQVU7Ozs7SUFBVixVQUFXLEVBQVc7UUFDcEIsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsZ0RBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQWU7O1lBQ3hCLFNBQVM7Ozs7UUFBRyxVQUFDLFNBQXNCLElBQWEsT0FBQSxTQUFTLENBQUMsU0FBUyxFQUFuQixDQUFtQixDQUFBOztZQUNyRSxXQUFXLEdBQUcsQ0FBQztRQUNuQixHQUFHO1lBQ0QsV0FBVyxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM3QixFQUFFLEdBQUcsbUJBQUEsRUFBRSxDQUFDLFlBQVksRUFBZSxDQUFDO1NBQ3JDLFFBQVEsRUFBRSxFQUFFO1FBQ2IsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxpREFBaUI7Ozs7SUFBakIsVUFBa0IsRUFBZTtRQUMvQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDO0lBQ3JELENB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QztnQkFDM0MsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksR0FBTSxTQUFTO29CQUMvQyxLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLE9BQUksQ0FBQztnQkFDcEUsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ3ZDLEtBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO2dCQUNyQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQyxDQUFBO1FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM1QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7O2dCQXpFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtpQkFDOUI7Ozs7Z0JBSlEsOEJBQThCO2dCQURYLFVBQVU7O0lBNkV0Qyw0QkFBQztDQUFBLEFBMUVELElBMEVDO1NBdkVZLHFCQUFxQjs7Ozs7O0lBQ3BCLHlEQUFnRTs7Ozs7SUFBRSxtQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RpY2t5SGVhZGVyQ29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9uZy1zdGlja3ktaGVhZGVyLWNvbnRhaW5lci5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwU3RpY2t5SGVhZGVyXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RpY2t5SGVhZGVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcHBTdGlja3lIZWFkZXJDb250YWluZXI6IFN0aWNreUhlYWRlckNvbnRhaW5lckRpcmVjdGl2ZSwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlZ2lzdGVyU3RpY2t5KCk7XG4gIH1cblxuICBnZXRQYXJyZW50KGVsOiBFbGVtZW50KTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiBlbC5wYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgY29tcHV0ZU9mZnNldFRvcChlbDogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICAgIGNvbnN0IGdldE9mZnNldCA9IChlbFRvQ2hlY2s6IEhUTUxFbGVtZW50KTogbnVtYmVyID0+IGVsVG9DaGVjay5vZmZzZXRUb3A7XG4gICAgbGV0IHRvdGFsT2Zmc2V0ID0gMDtcbiAgICBkbyB7XG4gICAgICB0b3RhbE9mZnNldCArPSBnZXRPZmZzZXQoZWwpO1xuICAgICAgZWwgPSBlbC5vZmZzZXRQYXJlbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgfSB3aGlsZSAoZWwpO1xuICAgIHJldHVybiB0b3RhbE9mZnNldDtcbiAgfVxuXG4gIGdldEJvdHRvbVRyZXNob2xkKGVsOiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY29tcHV0ZU9mZnNldFRvcChlbCkgKyBlbC5vZmZzZXRIZWlnaHQ7XG4gIH1cblxuICByZWdpc3RlclN0aWNreSgpIHtcbiAgICBsZXQgZml4ZWRHdWFyZCA9IGZhbHNlO1xuICAgIGxldCBhYnNvbHV0ZUd1YXJkID0gZmFsc2U7XG4gICAgbGV0IG9mZnNldFRvcDtcblxuICAgIGNvbnN0IGxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgY29uc3Qgd2lkdGhUb1NldCA9IHRoaXMuYXBwU3RpY2t5SGVhZGVyQ29udGFpbmVyLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgIGNvbnN0IGxlZnRUb1NldCA9IHRoaXMuYXBwU3RpY2t5SGVhZGVyQ29udGFpbmVyLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgY29uc3QgcGFycmVudCA9IHRoaXMuZ2V0UGFycmVudCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudCk7XG4gICAgICBpZiAoIWZpeGVkR3VhcmQgJiYgIWFic29sdXRlR3VhcmQpIHtcbiAgICAgICAgb2Zmc2V0VG9wID0gdGhpcy5jb21wdXRlT2Zmc2V0VG9wKHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuekluZGV4ID0gMTAwO1xuICAgICAgY29uc3QgYm90dG9tVHJlc2hvbGQgPSB0aGlzLmdldEJvdHRvbVRyZXNob2xkKHBhcnJlbnQpO1xuICAgICAgcGFycmVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPj0gb2Zmc2V0VG9wICYmIG9mZnNldFRvcCAhPT0gMCkge1xuICAgICAgICBwYXJyZW50LnN0eWxlLnBhZGRpbmdUb3AgPSBgJHt0aGlzLmVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0fXB4YDtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IDA7XG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5ib3R0b20gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3dpZHRoVG9TZXR9cHhgO1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9IGAke2xlZnRUb1NldH1weGA7XG4gICAgICAgIGZpeGVkR3VhcmQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IDA7XG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5ib3R0b20gPSBgYDtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gYGA7XG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gYGA7XG4gICAgICAgIHBhcnJlbnQuc3R5bGUucGFkZGluZ1RvcCA9ICcwcHgnO1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcbiAgICAgICAgZml4ZWRHdWFyZCA9IGFic29sdXRlR3VhcmQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+PSBib3R0b21UcmVzaG9sZCAtIHRoaXMuZWwubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgJiYgYm90dG9tVHJlc2hvbGQgIT09IDApIHtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gYDEwMCVgO1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9IGAke2xlZnRUb1NldCAtXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5vZmZzZXRQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdH1weGA7XG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5ib3R0b20gPSAwO1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gJyc7XG4gICAgICAgIGFic29sdXRlR3VhcmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgbGlzdGVuZXIpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBsaXN0ZW5lcik7XG4gIH1cbn1cbiJdfQ==