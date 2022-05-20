import { Component, OnInit } from '@angular/core';
// REFERENCIA para inyectar SERVICIOS  a un componente
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent implements OnInit {
  miPortfolio:any;
  //
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    // ACCEDER a los MÉTODOS, PROPIEDADES de la CLASE portfolio.service.ts
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPortfolio=data[0];
    });
  }
}