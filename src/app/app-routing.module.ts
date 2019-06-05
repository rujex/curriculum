import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ProyectosComponent } from './views/proyectos/proyectos.component';
import { HabilidadesComponent } from './views/habilidades/habilidades.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { CurriculumComponent } from './views/curriculum/curriculum.component';

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
    path: 'curriculum',
    component: CurriculumComponent
  },
  {
    path: 'habilidades',
    component: HabilidadesComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
