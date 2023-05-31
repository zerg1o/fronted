import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'

//Material
import {MaterialModule} from './material/material.module';


//Componentes
import { MenuComponent } from './menu/menu.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { TareasComponent } from './tareas/tareas.component';
import { CrearTareaComponent } from './tareas/crear-tarea/crear-tarea.component';
import { EditarTareaComponent } from './tareas/editar-tarea/editar-tarea.component';
import { IndiceTareasComponent } from './tareas/indice-tareas/indice-tareas.component';
import { FormularioTareasComponent } from './tareas/formulario-tareas/formulario-tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LandingPageComponent,
    LoginComponent,
    TareasComponent,
    CrearTareaComponent,
    EditarTareaComponent,
    IndiceTareasComponent,
    FormularioTareasComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
