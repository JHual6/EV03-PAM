import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Asignatura2Page } from './asignatura2.page';

const routes: Routes = [
  {
    path: '',
    component: Asignatura2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Asignatura2PageRoutingModule {}
