import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMaskCcNumber]',
})
export class MaskCcNumberDirective {
  @Input() maskwith = 'X';
  // @Input() maskRegex = /.(?=.{4})/g;
  @Input() maskRegex = /./g;

  private value: string = '';

  private element!: HTMLInputElement;

  constructor(private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngonInit(): void {
    this.value = this.element.value;
  }

  @HostListener('input')
  @HostListener('change')
  onValueChange() {
    this.value = this.element.value;
  }

  @HostListener('blur')
  onBlur() {
    this.maskData();
  }

  @HostListener('focus')
  onFocus() {
    this.unmaskData();
  }

  maskData() {
    //masking the data except last 4 digits using X.
    //You can customize this as it is input to the directive
    this.element.value = this.element.value.replace(
      this.maskRegex,
      this.maskwith
    );
  }
  unmaskData() {
    this.element.value = this.value;
  }
}
