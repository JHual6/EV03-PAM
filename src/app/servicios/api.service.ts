import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://api.qrserver.com/v1/read-qr-code/';

  constructor(private http: HttpClient) {}

  // Send the base64 image to the API for decoding
  readQrCode(imageData: string): Observable<any> {
    const formData = new FormData();
    const blob = this.dataURItoBlob(imageData);  // Convert base64 to Blob
    formData.append('file', blob, 'image.png');

    return this.http.post(this.apiUrl, formData);
  }

  // Utility function to convert Base64 to Blob
  private dataURItoBlob(dataURI: string): Blob {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  }
}
