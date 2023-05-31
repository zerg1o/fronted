import { Injectable } from '@angular/core';
import { TareaDTO } from './Tarea';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/Environment/environment';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TareasServiceService {
  private apiURL = environment.apiURL;
  constructor(private http:HttpClient) { }

  public getTareas(pagina :number, cantidadRegistrosMostrar:number):Observable<any>{
    let params = new HttpParams();
    params = params.append('pagina',pagina.toString())
    params = params.append('RecordsPorPagina',cantidadRegistrosMostrar.toString())
    return this.http.get<TareaDTO[]>(this.apiURL,{observe:'response',params});
  }
  public AddTareas(tarea:any){
    return this.http.post(this.apiURL,tarea);
  }

  public getById(id:number):Observable<TareaDTO>{
    return this.http.get<TareaDTO>(`${this.apiURL}/${id}`)
  }

  public edit(id:number,tarea:TareaDTO){
    return this.http.put(`${this.apiURL}/${id}`,tarea)
  }
}
