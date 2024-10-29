import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Asignatura4PageRoutingModule } from './asignatura4-routing.module';

import { Asignatura4Page } from './asignatura4.page';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatProgressSpinnerModule, 
    Asignatura4PageRoutingModule, 
    MatIconModule  
  ],
  declarations: [Asignatura4Page]
})
export class Asignatura4PageModule {}
