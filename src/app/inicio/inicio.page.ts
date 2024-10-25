import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';
import { ApiService } from '../servicios/api.service'; 
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { StorageService } from '../servicios/storage.service'; // Importar el servicio de almacenamiento
import { AutenticacionService } from '../servicios/autenticacion.service'; // Importar el servicio de autenticación
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],    
})
export class InicioPage implements OnInit {

  username: string = "";
  rol: string = ""; // Variable para almacenar el rol del usuario

  constructor(
    private route: ActivatedRoute, 
    private alertController: AlertController, 
    private apiService: ApiService, 
    private barcodeScanner: BarcodeScanner,
    private storageService: StorageService, // Inyectar el servicio de almacenamiento
    private authService: AutenticacionService, // Inyectar el servicio de autenticación
    private router: Router // Inyectar el router
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['username']) {
        this.username = params['username'];
        this.obtenerRol(this.username); // Obtener el rol cuando se cargue el componente
      }
    });
  }

  async obtenerRol(username: string) {
    try {
      const rol = await this.storageService.getRol(username); // Obtener el rol desde el servicio
      if (rol) {
        this.rol = rol; // Guardar el rol en la variable
        console.log('Rol del usuario:', this.rol);
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

  async paginaUsuarios() {
    const userRole = this.authService.getRolUsuario();
    if (userRole === 'administrador') {
      this.router.navigate(['/usuarios']);
    } else {
      console.error('No tienes permisos de administrador');
      this.router.navigate(['/no-existe']);
    }
  }

  async escanearQR() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
      });
  
      if (image && image.dataUrl) {
        const base64Image = image.dataUrl;
        console.log('Imagen capturada:', base64Image);
      }
    } catch (error) {
      console.error('Error abriendo la cámara:', error);
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'No se pudo abrir la cámara.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
  handleAsignaturaClick(asignatura: number) {
    // Lógica para manejar el clic en una asignatura
    console.log('Botón de Asignatura ' + asignatura + ' presionado.');
  }
}
