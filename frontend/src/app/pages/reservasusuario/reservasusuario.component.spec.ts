import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasusuarioComponent } from './reservasusuario.component';

describe('ReservasusuarioComponent', () => {
  let component: ReservasusuarioComponent;
  let fixture: ComponentFixture<ReservasusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservasusuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservasusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
