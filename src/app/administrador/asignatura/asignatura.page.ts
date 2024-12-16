import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicios/database.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.page.html',
  styleUrls: ['./asignatura.page.scss'],
})
export class AsignaturaPage implements OnInit {
  asignaturas: any[] = [];

  constructor(
    private databaseservice: DatabaseService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.cargarAsignaturas();
  }

  // Obtener todas las asignaturas de la base de datos
  cargarAsignaturas() {
    this.databaseservice.getAsignaturas().subscribe({
      next: (data) => {
        this.asignaturas = data;
      },
      error: (err) => {
        console.error('Error al obtener asignaturas:', err);
      }
    });
  }

   // Agregar asignatura
  // Agregar asignatura con alerta
  async agregarAsignatura() {
    console.log('Agregar nueva asignatura');
  }
  // Editar asignatura con alerta
  async editarAsignatura(asignatura: any) {
    console.log('Editar asignatura:', asignatura);
  }
  // Eliminar asignatura
  eliminarAsignatura(asignatura: any) {
    console.log('Eliminar asignatura:', asignatura);
  }
}