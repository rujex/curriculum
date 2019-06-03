import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SliderComponent } from '../../components/slider/slider.component';
import { AboutComponent } from '../about/about.component';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, SliderComponent, AboutComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
