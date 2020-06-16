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
    var body = { 'telefono': telefono, 'mes': mes };
    return this.http.post('http://localhost:1010/facturar/', body, httpOptions);
  }


}