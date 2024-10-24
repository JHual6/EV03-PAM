import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AutenticacionService{
    private usuarioLogueado: boolean = false;

    constructor(){}

    // Método que entrega si un usuario está logeado
    getLogueado(): boolean{
        return this.usuarioLogueado
    }
    // Método para iniciar sesión
    iniciarSesion() {
        this.usuarioLogueado = true;
    }
    // Método para cerrar sesión
    cerrarSesion() {
        this.usuarioLogueado = false;
    }    
}
