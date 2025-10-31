import { Component, Inject, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule, DOCUMENT } from '@angular/common';

import { ScrollService } from '../services/scroll.service'; 



@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnChanges {
  @Input() isVisibleForm: boolean = false; // segun se detecte en el formulario de form-reserva se cambia la visibilidad del formulario de login
  @Output() visibilityChange = new EventEmitter<boolean>();

  constructor(
    public auth: AuthService,
    public scrollService: ScrollService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isVisibleForm']) {
      this.scrollService.disabledScroll(this.isVisibleForm); // deshabilitamos o habilitamos el scroll según la visibilidad del formulario
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

    this.scrollService.disabledScroll(); // habilitamos el scroll nuevamente
    this.visibilityChange.emit(false); // actualizamos la visibilidad
  }

}

