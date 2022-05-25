import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
//import { GuardGuard } from './servicios/guard.guard';

const Routes: Routes = [
  //{path: 'portfolio', component: PortfolioComponent, canActivate:[GuardGuard]},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'iniciar-sesion', component: IniciarSesionComponent},
  //{path: '', redirectTo:'iniciar-sesion', pathMatch: 'full'}
  {path: '', redirectTo:'portfolio', pathMatch: 'full'}
];

// Las líneas se encuentran documentadas por que no logro resolver el acceso

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
