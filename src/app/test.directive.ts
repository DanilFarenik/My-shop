import { ThisReceiver } from '@angular/compiler';
import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  @Input("appStyle") color: string = "#369";
  @Input() fontSize: string = "24px";

  constructor(
    private el: ElementRef,
    private r: Renderer2
  ) {
    this.r.setStyle(this.el.nativeElement, "color", this.color);
    this.r.setStyle(this.el.nativeElement, "padding", "2rem");
    // el.nativeElement.stule="red";
  }

  @HostListener('mouseenter') onEnter() {
    this.r.setStyle(this.el.nativeElement, "color", this.color);

    this.r.setStyle(this.el.nativeElement, "fontSize", this.fontSize);

  }

}
