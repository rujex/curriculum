import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurriculumComponent } from './curriculum.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@NgModule({
  declarations: [CurriculumComponent, NavbarComponent],
  imports: [
    CommonModule
  ]
})
export class CurriculumModule { }
