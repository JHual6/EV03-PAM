import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../servicios/storage.service';
import { AutenticacionService } from '../servicios/autenticacion.service'; 

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  username: string = "";
  password: string = "";
  errorMessage: string = "";

  constructor(
    private router: Router,
    private storageService: StorageService,
    private authService: AutenticacionService 
  ) { }

  login() {
    this.errorMessage = "";
  
    this.storageService.getUsuarios().then(usuarios => {
      const usuarioEncontrado = usuarios?.find(user => user.nombre === this.username);
  
      if (usuarioEncontrado && usuarioEncontrado.contrasena === this.password) {
        this.authService.iniciarSesion(); 
        
        this.router.navigate(['/inicio'], { queryParams: { username: this.username } });
      } else if (!usuarioEncontrado) {
        this.errorMessage = "El usuario no existe";
      } else {
        this.errorMessage = "Contraseña incorrecta";
      }
    });
  }

  async ngOnInit() {
    const contrasenaAdmin = await this.storageService.getContrasena('admin');
    if (!contrasenaAdmin) {
      await this.storageService.addUsuario('admin', 'admin123');
    }

    const contrasenaJona = await this.storageService.getContrasena('jona');
    if (!contrasenaJona) {
      await this.storageService.addUsuario('jona', 'jona123');
    }
  }
}