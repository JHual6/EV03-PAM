import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service'; 

@Component({
  selector: 'app-asignatura1',
  templateUrl: './asignatura1.page.html',
  styleUrls: ['../asignaturas.page.scss']
})
export class Asignatura1Page implements OnInit {
  qrCodeData: string | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit() { }

  generateQrCode(inputText: any) {
    const text = String(inputText.value || ''); 
    if (!text) {
      console.error('No se proporcionó texto para generar el QR');
      return;
    }
  
    this.apiService.generateQrCode(text).subscribe(blob => {
      const url = URL.createObjectURL(blob);
      this.qrCodeData = url;
    });
  }
}