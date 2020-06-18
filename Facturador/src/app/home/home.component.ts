import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FacturacionService } from '../services/facturacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numero = "";
  nombre = "";
  nit = "";
  error="";
  mes = "1"
  constructor(private facturacionService: FacturacionService, private router: Router) { }
  form: FormGroup;
  ngOnInit(): void {

  }
  onSubmit() {
    if(this.numero&&this.mes){
      this.facturacionService.getFactura(this.numero, this.mes).subscribe(res => {
        console.log(res);
        
        this.facturacionService.registroDeFacturas = res["lista"];
        this.facturacionService.costo = res["suma"];
        console.log(res["suma"]);
        this.facturacionService.nombre = this.nombre;
        this.facturacionService.nit = this.nit;
        this.facturacionService.numero = this.numero;
        this.facturacionService.mes = this.mes;
        
        
        this.router.navigate(['/factura']);
      }, err => this.router.navigate(['/factura']))
      
    }
    else{
      this.error="Introdusca un numero valido!";
    }
  }

}
