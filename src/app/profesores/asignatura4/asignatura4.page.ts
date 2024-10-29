import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service'; 

@Component({
  selector: 'app-asignatura4',
  templateUrl: './asignatura4.page.html',
  styleUrls: ['../asignaturas.page.scss']
})
export class Asignatura4Page implements OnInit {
  qrCodeData: string | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit() { }

  // Función para generar un código QR a partir de un texto 
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