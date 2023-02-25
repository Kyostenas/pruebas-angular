import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraLateralComponent } from './vista-principal/barra-lateral/barra-lateral.component';
import { LoginComponent } from './vista-principal/login/login.component';
import { BarraSuperiorComponent } from './vista-principal/barra-superior/barra-superior.component';
import { BotonesComponent } from './logica-interna/botones/botones.component';
import { MarcoBotonesComponent } from './logica-interna/marco-botones/marco-botones.component';
import { ContenedorPrincipalComponent } from './vista-principal/contenedor-principal/contenedor-principal.component';



@NgModule({
  declarations: [
    BarraLateralComponent,
    LoginComponent,
    BarraSuperiorComponent,
    BotonesComponent,
    MarcoBotonesComponent,
    ContenedorPrincipalComponent
  ],
  exports: [
    BarraLateralComponent,
    LoginComponent,
    BarraSuperiorComponent,
    ContenedorPrincipalComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
