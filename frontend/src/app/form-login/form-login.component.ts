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
        // modemos la vista al inicio
        // window.scrollTo({ top: 0, behavior: 'smooth' });
        
        //  desactivamos el scroll
        this.doc.body.classList.add('no-scroll');

      } else {
        // restauramos el scroll del body
        this.doc.body.classList.remove('no-scroll');
      }
    }
  }



  login(form: NgForm) {
    if (form.valid) {
      const { email, password, remember } = form.value;
      const loginData = { email, password, remember };
      localStorage.setItem('usserAutenticado', JSON.stringify(loginData));
      this.hideForm()
      alert(`Iniciando sesión para ${loginData.email}`);
    } else {
      alert('Por favor completa todos los campos');
    }
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

