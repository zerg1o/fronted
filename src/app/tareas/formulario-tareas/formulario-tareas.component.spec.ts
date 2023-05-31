import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTareasComponent } from './formulario-tareas.component';

describe('FormularioTareasComponent', () => {
  let component: FormularioTareasComponent;
  let fixture: ComponentFixture<FormularioTareasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioTareasComponent]
    });
    fixture = TestBed.createComponent(FormularioTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
