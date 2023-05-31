import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TareasServiceService } from '../tareas-service.service';
import { TareaDTO } from '../Tarea';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css']
})
export class CrearTareaComponent {

  constructor(private router:Router,private formBuilder: FormBuilder, private TareaService : TareasServiceService){

  }

  guardarCambios(tarea:any){

    console.log(tarea)
    this.TareaService.AddTareas(tarea).subscribe({
      next: () => this.router.navigate(['/index/tareas']),
      error: (error) => console.error(error)      
    })
    
  }

  
}
