import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosEspacioComponent } from './filtros-espacio.component';

describe('FiltrosEspacioComponent', () => {
  let component: FiltrosEspacioComponent;
  let fixture: ComponentFixture<FiltrosEspacioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltrosEspacioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltrosEspacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
