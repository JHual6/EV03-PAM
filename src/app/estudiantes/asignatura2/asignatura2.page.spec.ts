import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Asignatura2Page } from './asignatura2.page';

describe('Asignatura2Page', () => {
  let component: Asignatura2Page;
  let fixture: ComponentFixture<Asignatura2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Asignatura2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
