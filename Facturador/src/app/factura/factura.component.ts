import { Component, OnInit } from '@angular/core';
import { FacturacionService } from '../services/facturacion.service';
import { Router } from '@angular/router';
import { RegistroFactura } from '../models/registoFactura';
import pdfMake from 'pdfmake/build/pdfmake';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  
@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  registroDeFacturas:RegistroFactura[]=[];
  costo:string;
  constructor(private facturacionService:FacturacionService,private router:Router) { }
  numero = "";
  nombre = "";
  mes = "";
  nit = "";
  ngOnInit(): void {
    this.registroDeFacturas=this.facturacionService.registroDeFacturas;
    this.numero=this.facturacionService.numero;
    this.nit=this.facturacionService.nit;
    this.nombre=this.facturacionService.nombre;
    this.costo=this.facturacionService.costo;
    this.mes=this.facturacionService.mes;


    var a:RegistroFactura=new RegistroFactura;
    a.costo="10.12";
    a.fecha="12/12/12";
    a.hora="12:12";
    a.telefonoDestino="74565231";
    a.tiempoDuracionSegundo="10";
    this.registroDeFacturas.push(a);
    this.registroDeFacturas.push(a);
    this.registroDeFacturas.push(a);

    this.costo="1423";


  }

  public captureScreen()  
  {  
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('Factura de '+this.nombre+'.pdf'); // Generated PDF   
    });  
  }  
  generatePdf(){
    console.log("ads");
    const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
    pdfMake.createPdf(documentDefinition).open();
    
   }

}
