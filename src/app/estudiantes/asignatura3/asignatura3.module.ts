import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Asignatura3PageRoutingModule } from './asignatura3-routing.module';

import { Asignatura3Page } from './asignatura3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Asignatura3PageRoutingModule
  ],
  declarations: [Asignatura3Page]
})
export class Asignatura3PageModule {}
