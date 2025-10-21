import { Directive, ElementRef, HostListener, Input, input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppTooltip]',
  standalone: false,
})
export class AppTooltip {
  @Input('appAppTooltip') toolTipText: string = '';
  private tooltipElement: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this._onShowTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._onHideTooltip();
  }

  private _onShowTooltip() {
    this.tooltipElement = this.renderer.createElement('span');
    if (this.tooltipElement) {
      this.tooltipElement.innerText = this.toolTipText;
      this.renderer.addClass(this.tooltipElement, 'tooltip');
      this.renderer.appendChild(this.el.nativeElement, this.tooltipElement);
      this.el.nativeElement.style.position = 'relative';
    }
  }

  private _onHideTooltip() {
    if (this.tooltipElement) {
      this.renderer.removeChild(this.el.nativeElement, this.tooltipElement);
      this.tooltipElement = null;
    }
  }
}
