import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabilidadesComponent } from './habilidades.component';
import { ProgressComponent } from '../../components/progress/progress.component';

@NgModule({
  declarations: [HabilidadesComponent, ProgressComponent],
  imports: [
    CommonModule
  ]
})
export class HabilidadesModule { }
