import { Injectable } from "@angular/core";
import { StorageService } from './storage.service'; // Importa StorageService

@Injectable({
    providedIn: 'root'
})
export class AutenticacionService {
    private usuarioLogueado: boolean = false;
    private rolUsuario: string | null = null;

    constructor(private storageService: StorageService) {} // Inyecta StorageService

    // Método que entrega si un usuario está logeado
    getLogueado(): boolean {
        return this.usuarioLogueado;
    }

    // Método para obtener el rol del usuario logueado
    getRolUsuario(): string | null {
        return this.rolUsuario; // Devuelve el rol almacenado localmente después de iniciar sesión
    }


    // Método para iniciar sesión
    async iniciarSesion(nombreUsuario: string) {
        this.usuarioLogueado = true;
        // Obtener el rol del usuario desde el StorageService pasando el nombre de usuario
        this.rolUsuario = await this.storageService.getRol(nombreUsuario); 
    }

    // Método para cerrar sesión
    cerrarSesion() {
        this.usuarioLogueado = false;
        this.rolUsuario = null;  // Limpia el rol cuando cierra sesión
    }
}
