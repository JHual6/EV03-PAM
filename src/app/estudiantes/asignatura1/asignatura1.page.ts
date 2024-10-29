import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { ApiService } from '../../servicios/api.service'; 
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-asignatura1',
  templateUrl: './asignatura1.page.html',
  styleUrls: ['../asignaturas.page.scss'],
})
export class Asignatura1Page implements OnInit {

  constructor(private route: ActivatedRoute, private alertController: AlertController, private apiService: ApiService, private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
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
}
