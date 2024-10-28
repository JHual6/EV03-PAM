import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Asignatura4Page } from './asignatura4.page';

const routes: Routes = [
  {
    path: '',
    component: Asignatura4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Asignatura4PageRoutingModule {}
