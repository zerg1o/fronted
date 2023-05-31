import { Component, OnInit } from '@angular/core';
import { TareasServiceService } from '../tareas-service.service';
import { TareaDTO } from '../Tarea';
import {MatDialog} from '@angular/material/dialog'
import { CrearTareaComponent } from '../crear-tarea/crear-tarea.component';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-indice-tareas',
  templateUrl: './indice-tareas.component.html',
  styleUrls: ['./indice-tareas.component.css']
})
export class IndiceTareasComponent implements OnInit{
  constructor(private TareaService : TareasServiceService, private matDialog : MatDialog){

  }
  cantidadTotalRegistros:any;
  cantidadRegistrosMostrar:number=10;
  paginaActual:number = 1;
  tareasList:TareaDTO[];
  columnasShow = ['id','descripcion','fecha_inicio','fecha_fin','estado','acciones'];
  ngOnInit():void{
    
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosMostrar)
  }
  cargarRegistros(pagina:number, cantidadElementosAMostrar){
    this.TareaService.getTareas(pagina,cantidadElementosAMostrar).subscribe((respuesta:HttpResponse<TareaDTO[]>)=>{
      console.log(respuesta.headers.get("cantidadTotalRegistros"))
      this.cantidadTotalRegistros = respuesta.headers.get("cantidadTotalRegistros");
      this.tareasList=respuesta.body;
    },error=> console.log(error));
  }

  actualizarPaginacion(datos: PageEvent){
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadRegistrosMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual,this.cantidadRegistrosMostrar);
  }
}
