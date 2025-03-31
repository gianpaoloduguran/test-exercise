import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisableCutCopyPaste]',
})
export class DisableCutCopyPasteDirective {
  constructor() {}
  @HostListener('copy', ['$event']) //block copy
  blockCopy(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('paste', ['$event']) //block paste
  blockPaste(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
    //block cut
    e.preventDefault();
  }
}
