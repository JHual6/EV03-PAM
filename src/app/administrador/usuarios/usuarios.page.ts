import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../servicios/storage.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: 'usuarios.page.html',
  styleUrls: ['usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  usuarios: { nombre: string; contrasena: string; rol: string }[] = [];

  constructor(private storageService: StorageService) {}

  async ngOnInit() {
    this.usuarios = await this.storageService.getUsuarios();
  }

  editarUsuario(usuario: any) {
    // Lógica para editar usuario
  }

  eliminarUsuario(usuario: any) {
    // Lógica para eliminar usuario
  }
}
