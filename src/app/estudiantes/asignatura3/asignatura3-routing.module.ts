import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Asignatura3Page } from './asignatura3.page';

const routes: Routes = [
  {
    path: '',
    component: Asignatura3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Asignatura3PageRoutingModule {}
