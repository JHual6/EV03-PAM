import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Asignatura1PageRoutingModule } from './asignatura1-routing.module';

import { Asignatura1Page } from './asignatura1.page';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatProgressSpinnerModule, 
    Asignatura1PageRoutingModule, 
    MatIconModule  
  ],
  declarations: [Asignatura1Page]
})
export class Asignatura1PageModule {}
