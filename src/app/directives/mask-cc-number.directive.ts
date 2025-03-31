import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMaskCcNumber]',
})
export class MaskCcNumberDirective {
  @Input() maskwith = 'X';
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

  @HostListener('blur') //maskdata on blur
  onBlur() {
    this.maskData();
  }

  @HostListener('focus') //unmask on focus
  onFocus() {
    this.unmaskData();
  }

  maskData() {
    this.element.value = this.element.value.replace(
      this.maskRegex,
      this.maskwith
    );
  }
  unmaskData() {
    this.element.value = this.value;
  }
}
