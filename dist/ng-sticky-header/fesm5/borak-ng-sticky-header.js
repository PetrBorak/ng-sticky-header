import { Directive, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StickyHeaderContainerDirective = /** @class */ (function () {
    function StickyHeaderContainerDirective(elementRef) {
        this.elementRef = elementRef;
    }
    StickyHeaderContainerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appStickyHeaderContainer]'
                },] }
    ];
    /** @nocollapse */
    StickyHeaderContainerDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return StickyHeaderContainerDirective;
}());
if (false) {
    /** @type {?} */
    StickyHeaderContainerDirective.prototype.elementRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgStickyHeaderModule = /** @class */ (function () {
    function NgStickyHeaderModule() {
    }
    NgStickyHeaderModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        StickyHeaderContainerDirective,
                        StickyHeaderDirective
                    ],
                    imports: [],
                    exports: [
                        StickyHeaderContainerDirective,
                        StickyHeaderDirective
                    ]
                },] }
    ];
    return NgStickyHeaderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgStickyHeaderModule, StickyHeaderContainerDirective as ɵa, StickyHeaderDirective as ɵb };
//# sourceMappingURL=borak-ng-sticky-header.js.map
