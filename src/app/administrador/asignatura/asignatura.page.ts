import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.page.html',
  styleUrls: ['./asignatura.page.scss'],
})
export class AsignaturaPage implements OnInit {
  asignaturas: any[] = [];

  constructor(private databaseservice: DatabaseService) {}

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
   agregarAsignatura() {
    const nuevaAsignatura = {
      id_profesor: 1,
      nombre_asignatura: 'Matemáticas',
      siglas_asignatura: 'MAT101',
      color_asignatura: 'Azul',
      color_seccion_asignatura: 'Rojo',
      seccion_asignatura: 'A',
      modalidad_asignatura: 'Presencial',
    };
  
    this.databaseservice.insertAsignatura(nuevaAsignatura).subscribe(
      (response) => {
        console.log(response.message);
        alert('Asignatura agregada correctamente');
      },
      (error) => console.error('Error al agregar asignatura', error)
    );
  }
  
  // Editar asignatura
  editarAsignatura(id_asignatura: number) {
    const id_profesor = 2; // Nuevo ID del profesor
    this.databaseservice.updateAsignatura(id_asignatura, id_profesor).subscribe(
      (response) => {
        console.log(response.message);
        alert('Asignatura actualizada correctamente');
      },
      (error) => console.error('Error al actualizar asignatura', error)
    );
  }
  
  // Eliminar asignatura
  eliminarAsignatura(id_asignatura: number) {
    if (confirm('¿Estás seguro de eliminar la asignatura?')) {
      this.databaseservice.deleteAsignatura(id_asignatura).subscribe(
        (response) => {
          console.log(response.message);
          alert('Asignatura eliminada correctamente');
        },
        (error) => console.error('Error al eliminar asignatura', error)
      );
    }
  }
}