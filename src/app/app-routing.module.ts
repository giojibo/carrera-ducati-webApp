import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { BasesPromocionScreenComponent } from './screens/bases-promocion-screen/bases-promocion-screen.component';
import { PerfilUserComponent } from './partials/perfil-user/perfil-user.component';
import { PoliticaPrivacidadScreenComponent } from './screens/politica-privacidad-screen/politica-privacidad-screen.component';
import { TerminosCondicionesScreenComponent } from './screens/terminos-condiciones-screen/terminos-condiciones-screen.component';
import { InstruccionesScreenComponent } from './screens/instrucciones-screen/instrucciones-screen.component';
import { NuevoLookScreenComponent } from './screens/nuevo-look-screen/nuevo-look-screen.component';
import { JuegoTerminadoScreenComponent } from './screens/juego-terminado-screen/juego-terminado-screen.component';
import { JuegoComponent } from './screens/juego/juego.component';

const routes: Routes = [
  { path: "", component: LoginScreenComponent, pathMatch: 'full' },
  { path: "registro", component: RegistroScreenComponent, pathMatch: 'full' },
  { path: "home", component: HomeScreenComponent, pathMatch: 'full' },
  { path: "bases-promocion", component: BasesPromocionScreenComponent, pathMatch: 'full'},
  { path: "perfil-usuario", component: PerfilUserComponent, pathMatch: 'full'},
  { path: "politica-privacidad", component: PoliticaPrivacidadScreenComponent, pathMatch:'full'},
  { path: "terminos-condiciones", component: TerminosCondicionesScreenComponent, pathMatch: 'full'},
  { path: "instrucciones", component: InstruccionesScreenComponent, pathMatch:'full'},
  { path: "nuevo-look", component: NuevoLookScreenComponent, pathMatch: 'full'},
  { path: "juego", component: JuegoComponent, pathMatch: 'full'},
  { path: "juego-terminado", component: JuegoTerminadoScreenComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
