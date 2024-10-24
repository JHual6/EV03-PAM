import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { Camera, CameraResultType } from '@capacitor/camera';
import { ApiService } from '../servicios/api.service'; 
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],    
})
export class InicioPage implements OnInit {

  username: string = "";

  constructor(private route: ActivatedRoute, private alertController: AlertController, private apiService: ApiService, private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['username']) {
        this.username = params['username'];
      }
    });
  }

  async escanearQR() {
    try {
      // Captura una foto usando la cámara
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl, // Obtener la imagen como DataURL (base64)
      });
  
      if (image && image.dataUrl) {
        const base64Image = image.dataUrl;
        // Aquí puedes manejar la imagen capturada, como enviarla a tu API
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
