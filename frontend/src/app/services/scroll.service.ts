import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(@Inject(DOCUMENT) private doc: Document) { }

  disabledScroll(disable: boolean = false): void {
    if (disable) {
      this.doc.body.classList.add('no-scroll');
    } else {
      this.doc.body.classList.remove('no-scroll');
    }
  }
}
