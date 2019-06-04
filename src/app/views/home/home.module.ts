import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SliderComponent } from '../../components/slider/slider.component';
import { AboutComponent } from '../about/about.component';
import { ProyectosComponent } from '../proyectos/proyectos.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../../components/welcome/welcome.component';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, SliderComponent, AboutComponent, ProyectosComponent, WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
