import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditarReservaComponent } from './form-editar-reserva.component';

describe('FormEditarReservaComponent', () => {
  let component: FormEditarReservaComponent;
  let fixture: ComponentFixture<FormEditarReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEditarReservaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEditarReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
