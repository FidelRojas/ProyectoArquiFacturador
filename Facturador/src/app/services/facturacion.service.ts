import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { RegistroFactura } from '../models/registoFactura';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class FacturacionService {
  registroDeFacturas:RegistroFactura[]=[];
  costo:string;
  nombre:string;
  nit:string;
  numero:string;
  mes:string;


  constructor(protected http: HttpClient) { }

  getFactura(telefono: string, mes: string) {
    return this.http.get('http://localhost:4567/facturar/'+telefono+'/'+mes);
  }


}