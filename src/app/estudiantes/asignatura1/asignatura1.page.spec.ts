import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Asignatura1Page } from './asignatura1.page';

describe('Asignatura1Page', () => {
  let component: Asignatura1Page;
  let fixture: ComponentFixture<Asignatura1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Asignatura1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
