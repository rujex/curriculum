import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosComponent } from './proyectos.component';
import { GaleryComponent } from 'src/app/components/galery/galery.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@NgModule({
  declarations: [ProyectosComponent, GaleryComponent, NavbarComponent],
  imports: [
    CommonModule
  ]
})
export class ProyectosModule { }
