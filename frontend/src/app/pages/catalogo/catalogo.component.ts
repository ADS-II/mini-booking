import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspaciosComponent } from "src/app/espacios/espacios.component";

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, EspaciosComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {

}
