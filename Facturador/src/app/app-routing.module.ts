import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FacturaComponent } from './factura/factura.component';


const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"factura/:id",component:FacturaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
