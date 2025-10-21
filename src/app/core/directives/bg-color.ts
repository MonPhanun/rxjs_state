import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBgColor]',
  standalone: false,
})
export class BgColor {
  @Input('appBgColor') BgColor: string = '';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this._onSetBgColor(this.BgColor);
    this._onMoveHover('pointer');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._onSetBgColor('');
  }

  private _onSetBgColor(in_color: string) {
    this.el.nativeElement.style.backgroundColor = in_color;
  }

  private _onMoveHover(in_cusor: string) {
    this.el.nativeElement.style.cursor = in_cusor;
  }
}
