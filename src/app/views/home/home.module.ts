import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AboutComponent } from '../about/about.component';
import { ProyectosComponent } from '../proyectos/proyectos.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, AboutComponent, ProyectosComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
