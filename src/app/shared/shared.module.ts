import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComponent } from './img/img.component';
import { IntersectionObserverDirective } from './directive/intersection-observer.directive';

@NgModule({
  declarations: [ImgComponent, IntersectionObserverDirective],
  imports: [CommonModule],
  exports: [ImgComponent, IntersectionObserverDirective],
})
export class SharedModule {}
