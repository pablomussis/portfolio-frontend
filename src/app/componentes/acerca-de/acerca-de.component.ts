import { Component, OnInit } from '@angular/core';
// REFERENCIA para inyectar SERVICIOS  a un componente
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent implements OnInit {
  miPortfolio:any;
  //
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    // ACCEDER a los MÉTODOS, PROPIEDADES de la CLASE portfolio.service.ts
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPortfolio=data;
    });
  }
}
