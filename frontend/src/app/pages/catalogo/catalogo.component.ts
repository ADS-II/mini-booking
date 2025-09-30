import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspaciosComponent } from "src/app/espacios/espacios.component";
import { FooterComponent } from "src/app/components/footer/footer.component";

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, EspaciosComponent, FooterComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {

}
