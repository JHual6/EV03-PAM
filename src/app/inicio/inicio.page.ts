import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';
import { ApiService } from '../servicios/api.service'; 
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { StorageService } from '../servicios/storage.service';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  username: string = "";
  rol: string = "";
  fondoClase: string = 'fondo';

  constructor(
    private route: ActivatedRoute,
    private alertController: AlertController,
    private apiService: ApiService,
    private barcodeScanner: BarcodeScanner,
    private storageService: StorageService,
    private authService: AutenticacionService,
    private router: Router
  ) { }
  // Función para obtener el nombre del usuario al iniciar la página
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['username']) {
        this.username = params['username'];
        this.obtenerRol(this.username);
      }
    });
  }
  // Función para obtener ell rol del usuario
  async obtenerRol(username: string) {
    try {
      const rol = await this.storageService.getRol(username);
      console.log('Rol obtenido:', rol);
      if (rol) {
        this.rol = rol;
        this.setFondoClase(); 
      } else {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'No se pudo obtener el rol del usuario.',
          buttons: ['OK']
        });
        await alert.present();
      }
    } catch (error) {
      console.error('Error obteniendo el rol:', error);
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Ocurrió un error al obtener el rol del usuario.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
  // Función para el archivo scss, cambiar el fondo dependiendo del rol del usuario
  setFondoClase() {
    switch (this.rol) {
      case 'estudiante':
        this.fondoClase = 'fondo fondo-estudiante';
        break;
      case 'profesor':
        this.fondoClase = 'fondo fondo-profesor';
        break;
      case 'administrador':
        this.fondoClase = 'fondo fondo-administrador';
        break;
      default:
        this.fondoClase = 'fondo';
    }
  }
  // Redirección a la página de usuarios para el rol de administrador
  async paginaUsuarios() {
    const userRole = this.authService.getRolUsuario();
    console.log('Rol de usuario en paginaUsuarios:', userRole);
  
    if (userRole === 'administrador') {
      this.router.navigate(['/usuarios']);
    } else {
      console.error('No tienes permisos de administrador');
      this.router.navigate(['/acceso-denegado']);
    }
  }
  // Redirección para la página de Asignatura1 para el rol profesor
  async navegarAsignatura1() {
    const userRole = this.authService.getRolUsuario();
    console.log('Rol de usuario en navegarAsignatura1:', userRole);
  
    if (userRole === 'profesor') {
      this.router.navigate(['/asignatura1']);
    } else {
      console.error('No tienes permisos de administrador');
      this.router.navigate(['/acceso-denegado']);
    }
  }
  // Redirección para la página de Asignatura2 para el rol profesor
  async navegarAsignatura2() {
    const userRole = this.authService.getRolUsuario();
    console.log('Rol de usuario en navegarAsignatura2:', userRole);
  
    if (userRole === 'profesor') {
      this.router.navigate(['/asignatura2']);
    } else {
      console.error('No tienes permisos de administrador');
      this.router.navigate(['/acceso-denegado']);
    }
  }
  // Redirección para la página de Asignatura3 para el rol profesor
  async navegarAsignatura3() {
    const userRole = this.authService.getRolUsuario();
    console.log('Rol de usuario en navegarAsignatura3:', userRole);
  
    if (userRole === 'profesor') {
      this.router.navigate(['/asignatura3']);
    } else {
      console.error('No tienes permisos de administrador');
      this.router.navigate(['/acceso-denegado']);
    }
  }
  // Redirección para la página de Asignatura4 para el rol profesor
  async navegarAsignatura4() {
    const userRole = this.authService.getRolUsuario();
    console.log('Rol de usuario en navegarAsignatura4:', userRole);
  
    if (userRole === 'profesor') {
      this.router.navigate(['/asignatura4']);
    } else {
      console.error('No tienes permisos de administrador');
      this.router.navigate(['/acceso-denegado']);
    }
  }
  // Redirección para la página de Asignatura1 para el rol estudiante
  async navegarEstudianteAsignatura1() {
    const userRole = this.authService.getRolUsuario();
    console.log('Rol de usuario en estudiante/asignatura1:', userRole);
  
    if (userRole === 'estudiante') {
      this.router.navigate(['/estudiante/asignatura1']);
    } else {
      console.error('No tienes permisos de administrador');
      this.router.navigate(['/acceso-denegado']);
    }
  }
  // Redirección para la página de Asignatura2 para el rol estudiante
  async navegarEstudianteAsignatura2() {
    const userRole = this.authService.getRolUsuario();
    console.log('Rol de usuario en estudiante/asignatura2:', userRole);
  
    if (userRole === 'estudiante') {
      this.router.navigate(['/estudiante/asignatura2']);
    } else {
      console.error('No tienes permisos de administrador');
      this.router.navigate(['/acceso-denegado']);
    }
  }
  // Redirección para la página de Asignatura3 para el rol estudiante
  async navegarEstudianteAsignatura3() {
    const userRole = this.authService.getRolUsuario();
    console.log('Rol de usuario en estudiante/asignatura3:', userRole);
  
    if (userRole === 'estudiante') {
      this.router.navigate(['/estudiante/asignatura3']);
    } else {
      console.error('No tienes permisos de administrador');
      this.router.navigate(['/acceso-denegado']);
    }
  }
  // Redirección para la página de Asignatura4 para el rol estudiante
  async navegarEstudianteAsignatura4() {
    const userRole = this.authService.getRolUsuario();
    console.log('Rol de usuario en estudiante/asignatura4:', userRole);
  
    if (userRole === 'estudiante') {
      this.router.navigate(['/estudiante/asignatura4']);
    } else {
      console.error('No tienes permisos de administrador');
      this.router.navigate(['/acceso-denegado']);
    }
  }
}