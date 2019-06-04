import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './components/slider/slider.component';
import { AboutComponent } from './views/about/about.component';
import { ProyectosComponent } from './views/proyectos/proyectos.component';
import { TitleIconComponent } from './components/title-icon/title-icon.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { GaleryComponent } from './components/galery/galery.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CardComponent } from './components/card/card.component';
import { HabilidadesComponent } from './views/habilidades/habilidades.component';
import { ProgressComponent } from './components/progress/progress.component';
import { ContactoComponent } from './views/contacto/contacto.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SliderComponent,
    AboutComponent,
    ProyectosComponent,
    TitleIconComponent,
    BreadcrumbComponent,
    GaleryComponent,
    WelcomeComponent,
    CardComponent,
    HabilidadesComponent,
    ProgressComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
