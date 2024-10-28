import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Asignatura1Page } from './asignatura1.page';

const routes: Routes = [
  {
    path: '',
    component: Asignatura1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Asignatura1PageRoutingModule {}
