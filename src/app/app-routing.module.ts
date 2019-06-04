import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ProyectosComponent } from './views/proyectos/proyectos.component';
import { HabilidadesComponent } from './views/habilidades/habilidades.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: HomeComponent,
  },
  {
    path: 'sobre-mi',
    component: AboutComponent
  },
  {
    path: 'proyectos',
    component: ProyectosComponent
  },
  {
    path: 'habilidades',
    component: HabilidadesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
