import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TareasServiceService } from '../tareas-service.service';
import { Router } from '@angular/router';
import { TareaDTO } from '../Tarea';

@Component({
  selector: 'app-formulario-tareas',
  templateUrl: './formulario-tareas.component.html',
  styleUrls: ['./formulario-tareas.component.css']
})
export class FormularioTareasComponent implements OnInit{
[x: string]: any;

  constructor(private router:Router,private formBuilder: FormBuilder, private TareaService : TareasServiceService){

  }
@Input()
editar:boolean;

@Input()
modeloTarea:any;
  
form:FormGroup;
@Output()
submit:EventEmitter<TareaDTO> = new EventEmitter<TareaDTO>();

estados:string[]= ['Por Asignar','Terminado','Pendiente','Cancelado','Asignado'];

  ngOnInit(): void {
   this.form = this.formBuilder.group({
    id:0,
    descripcion:["",{
      validators:[Validators.required]
    }],
    fecha_inicio:["",{
      validators:[Validators.required]
    }],
    fecha_fin:["",{
      validators:[Validators.required]
    }],
    id_usu_asignado:0,
    estado:["",{
      validators:[Validators.required]
    }]
    
   })
   if(this.modeloTarea!==undefined){
    this.form.patchValue(this.modeloTarea);
   }
  }

  guardarCambios(){
    this.submit.emit(this.form.value);
    this.router.navigate(['/index/tareas']);
  }

  getErrorDescripcion(){
    var input = this.form.get('descripcion')
    if(input.hasError('required')){
      return 'El campo Descripcion es requerido'
    }
  }
  getErrorFechaInicio(){
    var input = this.form.get('fecha_inicio')
    if(input.hasError('required')){
      return 'El campo Fecha Inicio es requerido'
    }
  }

  getErrorFechaFin(){
    var input = this.form.get('fecha_fin')
    if(input.hasError('required')){
      return 'El campo Fecha Fin es requerido'
    }
  }
}
