import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})

export class ToggleDirective {
@Input('appToggle') set onToggle(condition) {
  if (condition) {
    this.v.createEmbeddedView(this.t);
  } else {
    this.v.clear();
  }
}

  constructor(private v: ViewContainerRef, private t: TemplateRef<any>) { }

}
