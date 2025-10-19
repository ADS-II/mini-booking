import { Component, Inject, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnChanges {
  @Input() isVisibleForm: boolean = false;
  @Output() visibilityChange = new EventEmitter<boolean>();

  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isVisibleForm']) {
      if (this.isVisibleForm) {
        //  desactivamos el scroll
        this.doc.body.classList.add('no-scroll');

      } else {
        // restauramos el scroll del body
        this.doc.body.classList.remove('no-scroll');
      }
    }
  }



  login(form: NgForm) {
    this.auth.loginWithRedirect();
  }

  socialLogin() {
    this.auth.loginWithRedirect();
  }
  hideForm() {
    this.isVisibleForm = false;
    this.doc.body.classList.remove('no-scroll'); // agregamos la clase al body para que no permita hacer scroll mediante se superponga esta ventana
    this.visibilityChange.emit(false); // actualizamos la visibilidad
  }

}

