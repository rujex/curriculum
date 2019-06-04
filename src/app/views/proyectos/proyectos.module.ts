import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosComponent } from './proyectos.component';
import { TitleIconComponent } from '../../components/title-icon/title-icon.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { GaleryComponent } from 'src/app/components/galery/galery.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@NgModule({
  declarations: [ProyectosComponent, TitleIconComponent, BreadcrumbComponent, GaleryComponent, NavbarComponent],
  imports: [
    CommonModule
  ]
})
export class ProyectosModule { }
