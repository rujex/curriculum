import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurriculumComponent } from './curriculum.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CardscurriculumComponent } from '../../components/cardscurriculum/cardscurriculum.component';

@NgModule({
  declarations: [CurriculumComponent, NavbarComponent, CardscurriculumComponent],
  imports: [
    CommonModule
  ]
})
export class CurriculumModule { }
