import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TareasServiceService } from '../tareas-service.service';
import { TareaDTO } from '../Tarea';

@Component({
  selector: 'app-editar-tarea',
  templateUrl: './editar-tarea.component.html',
  styleUrls: ['./editar-tarea.component.css']
})
export class EditarTareaComponent implements OnInit{
  constructor(private activatedRoute : ActivatedRoute,private router:Router, private tareaService:TareasServiceService){

  }

  modelo:TareaDTO; 

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.tareaService.getById(params.id).subscribe(data=>{
        this.modelo = data
      },()=>this.router.navigate(['/index/tareas']))
    })
  
  }

  guardarCambios(tarea:TareaDTO){
    this.tareaService.edit(this.modelo.id,tarea).subscribe({
      next: () => this.router.navigate(['/index/tareas']),
      error: (error) => console.error(error) 
    });
    
  }
}
