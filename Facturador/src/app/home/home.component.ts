import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FacturacionService } from '../services/facturacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numero="";
  mes="Enero"
  constructor(private facturacionService:FacturacionService) { }
  form: FormGroup;
  ngOnInit(): void {
    
  }
  onSubmit(){
    console.log(this.numero,this.mes);
    
    

  }

}
