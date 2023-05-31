import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceTareasComponent } from './indice-tareas.component';

describe('IndiceTareasComponent', () => {
  let component: IndiceTareasComponent;
  let fixture: ComponentFixture<IndiceTareasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndiceTareasComponent]
    });
    fixture = TestBed.createComponent(IndiceTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
