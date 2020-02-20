import { NgModule } from '@angular/core';
import { StickyHeaderDirective } from './ng-sticky-header.directive';
import { StickyHeaderContainerDirective } from './ng-sticky-header-container.directive';



@NgModule({
  declarations: [
    StickyHeaderContainerDirective,
    StickyHeaderDirective
  ],
  imports: [
  ],
  exports: [
    StickyHeaderContainerDirective,
    StickyHeaderDirective
  ]
})
export class NgStickyHeaderModule { }
