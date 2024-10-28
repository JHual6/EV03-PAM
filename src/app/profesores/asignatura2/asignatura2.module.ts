import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Asignatura2PageRoutingModule } from './asignatura2-routing.module';

import { Asignatura2Page } from './asignatura2.page';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatProgressSpinnerModule, 
    Asignatura2PageRoutingModule
  ],
  declarations: [Asignatura2Page]
})
export class Asignatura2PageModule {}
