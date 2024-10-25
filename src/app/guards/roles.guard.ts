import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    // Aquí deberías implementar la lógica para verificar el rol del usuario
    const userRole = 'admin'; // Esto debería venir de tu servicio de autenticación
    const allowedRoles = route.data['allowedRoles'] as Array<string>;

    if (allowedRoles.includes(userRole)) {
      return true;
    } else {
      // Si no tiene el rol adecuado, redirige a una página de acceso denegado en lugar de 'no-existe'
      return this.router.createUrlTree(['/acceso-denegado']);
    }
  }
}
