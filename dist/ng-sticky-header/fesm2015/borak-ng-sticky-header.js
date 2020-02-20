import { Directive, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StickyHeaderContainerDirective {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
}
StickyHeaderContainerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appStickyHeaderContainer]'
            },] }
];
/** @nocollapse */
StickyHeaderContainerDirective.ctorParameters = () => [
    { type: ElementRef }
];
if (false) {
    /** @type {?} */
    StickyHeaderContainerDirective.prototype.elementRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StickyHeaderDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgStickyHeaderModule {
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
