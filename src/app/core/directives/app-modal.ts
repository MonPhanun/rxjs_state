import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appAppModal]',
  standalone: false,
  exportAs: 'modal',
})
export class AppModal implements OnInit, OnDestroy {
  isVisible: boolean = false;

  @Input('appModalContentIsVisible') set isModalVisible(in_visible: boolean) {
    if (in_visible && !this.isVisible) {
      this.onShowModal();
    } else if (!in_visible && this.isVisible) {
      this.onHidModal();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.onHidModal();
  }

  onShowModal() {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef);
    this.isVisible = true;
    //Add a global class to the body to prevent background scrolling
    if (isPlatformBrowser(this.platformId)) this.renderer.addClass(document.body, 'modal-open');
  }

  onHidModal() {
    this.viewContainer.clear();
    this.isVisible = false;
    //remove a global class from the body to prevent background scrolling
    if (isPlatformBrowser(this.platformId)) this.renderer.removeClass(document.body, 'modal-open');
  }

  onToggle(visible?: boolean) {
    if (typeof visible == 'boolean') {
      visible ? this.onShowModal() : this.onHidModal();
    } else {
      this.isVisible ? this.onHidModal() : this.onShowModal();
    }
  }
}
