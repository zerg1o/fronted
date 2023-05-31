import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { TareasComponent } from './tareas/tareas.component';
import { CrearTareaComponent } from './tareas/crear-tarea/crear-tarea.component';
import { EditarTareaComponent } from './tareas/editar-tarea/editar-tarea.component';
import { IndiceTareasComponent } from './tareas/indice-tareas/indice-tareas.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'tareas',component:TareasComponent},
  {path:'index/tareas',component:IndiceTareasComponent},
  {path:'tareas/crear',component:CrearTareaComponent},
  {path:'tareas/editar/:id',component:EditarTareaComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
