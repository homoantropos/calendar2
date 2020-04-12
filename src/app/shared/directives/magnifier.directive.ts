import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appMagnifier]'
})

export class MagnifierDirective {
@Input() dimensions: {fontSize: string, width: string, height: string, lineHeight: string};
@HostBinding('style.font-size') fontMag;
@HostBinding('style.width') widthMag;
@HostBinding('style.height') heightMag;
@HostBinding('style.line-height') lineHeightMag;

constructor() {}

@HostListener('mouseenter') onMouseEnter() {
  this.fontMag = this.dimensions.fontSize;
  this.widthMag = this.dimensions.width;
  this.heightMag = this.dimensions.height;
  this.lineHeightMag = this.dimensions.lineHeight;
}

@HostListener('mouseleave') onMouseLEave() {
  this.fontMag = null;
  this.widthMag = null;
  this.widthMag = null;
  this.heightMag = null;
  this.lineHeightMag = null;
}

}
