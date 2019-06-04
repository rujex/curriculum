import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { CardComponent } from '../../components/card/card.component';


@NgModule({
  declarations: [AboutComponent, CardComponent ],
  imports: [
    CommonModule
  ]
})
export class AboutModule { }
