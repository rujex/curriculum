import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@NgModule({
  declarations: [ContactoComponent, NavbarComponent],
  imports: [
    CommonModule
  ]
})
export class ContactoModule { }
