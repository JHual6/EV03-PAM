import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service'; 

@Component({
  selector: 'app-asignatura3',
  templateUrl: './asignatura3.page.html',
  styleUrls: ['../asignaturas.page.scss']
})
export class Asignatura3Page implements OnInit {
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