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

  mes = "Enero"
  constructor(private facturacionService: FacturacionService, private router: Router) { }
  form: FormGroup;
  ngOnInit(): void {

  }
  onSubmit() {
    console.log(this.numero, this.mes);

    this.facturacionService.getFactura(this.numero, this.mes).subscribe(res => {
      this.facturacionService.registroDeFacturas = res["registros"];
      this.facturacionService.costo = res["total"];
      this.facturacionService.nombre = this.nombre;
      this.facturacionService.nit = this.nit;
      this.facturacionService.numero = this.numero;
      this.facturacionService.mes = this.mes;


      this.router.navigate(['/factura']);
    }, err => this.router.navigate(['/factura']))

  }

}
