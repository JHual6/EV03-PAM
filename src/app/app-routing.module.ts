import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutenticacionGuard } from './guards/autenticacion.guard';
import { RolesGuard } from './guards/roles.guard';
import { rolprofesorGuard } from './guards/rolprofesor.guard';
import { UsuariosPage } from './administrador/usuarios/usuarios.page';
import { rolestudianteGuard } from './guards/rolestudiante.guard';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'ingreso',
    pathMatch: 'full'
  },
  {
    path: 'ingreso',
    loadChildren: () => import('./ingreso/ingreso.module').then( m => m.IngresoPageModule)
  },
  {
    path: 'restablecer',
    loadChildren: () => import('./restablecer/restablecer.module').then( m => m.RestablecerPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule), canActivate: [AutenticacionGuard]
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./administrador/usuarios/usuarios.module').then(m => m.UsuariosPageModule),
    canActivate: [AutenticacionGuard, RolesGuard],
    data: { allowedRoles: ['admin'] }
  },
  {
    path: 'asignatura1',
    data: { allowedRolesp: ['profesor']},  
    canActivate: [AutenticacionGuard, rolprofesorGuard],
    loadChildren: () => import('./profesores/asignatura1/asignatura1.module').then( m => m.Asignatura1PageModule)
  },
  {
    path: 'asignatura2',
    data: { allowedRolesp: ['profesor']},  
    canActivate: [AutenticacionGuard, rolprofesorGuard],
    loadChildren: () => import('./profesores/asignatura2/asignatura2.module').then( m => m.Asignatura2PageModule)
  },
  {
    path: 'asignatura3',
    data: { allowedRolesp: ['profesor']},  
    canActivate: [AutenticacionGuard, rolprofesorGuard],
    loadChildren: () => import('./profesores/asignatura3/asignatura3.module').then( m => m.Asignatura3PageModule)
  },
  {
    path: 'asignatura4',
    data: { allowedRolesp: ['profesor']},  
    canActivate: [AutenticacionGuard, rolprofesorGuard],
    loadChildren: () => import('./profesores/asignatura4/asignatura4.module').then( m => m.Asignatura4PageModule)
  },
  {
    path: 'estudiante/asignatura1',
    data: { allowedRolesp: ['estudiante']},  
    canActivate: [AutenticacionGuard, rolestudianteGuard],
    loadChildren: () => import('./estudiantes/asignatura1/asignatura1.module').then( m => m.Asignatura1PageModule)
  },
  {
    path: 'estudiante/asignatura2',
    data: { allowedRolesp: ['estudiante']},  
    canActivate: [AutenticacionGuard, rolestudianteGuard],
    loadChildren: () => import('./estudiantes/asignatura2/asignatura2.module').then( m => m.Asignatura2PageModule)
  },
  {
    path: 'estudiante/asignatura3',
    data: { allowedRolesp: ['estudiante']},  
    canActivate: [AutenticacionGuard, rolestudianteGuard],
    loadChildren: () => import('./estudiantes/asignatura3/asignatura3.module').then( m => m.Asignatura3PageModule)
  },
  {
    path: 'estudiante/asignatura4',
    data: { allowedRolesp: ['estudiante']},  
    canActivate: [AutenticacionGuard, rolestudianteGuard],
    loadChildren: () => import('./estudiantes/asignatura4/asignatura4.module').then( m => m.Asignatura4PageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./no-existe/no-existe.module').then( m => m.NoExistePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
