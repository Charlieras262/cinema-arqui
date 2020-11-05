import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { SalasComponent } from './components/salas/salas.component';
import { SesionesComponent } from './components/sesiones/sesiones.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminGuard } from './guards/admin/admin.guard';
import { LogedinGuard } from './guards/logedin/logedin.guard';
import { NoLogedinGuard } from './guards/no-logedin/no-logedin.guard';

const routes: Routes = [
  //GENERAL
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [LogedinGuard] },
  { path: 'login/:id', component: LoginComponent, canActivate: [LogedinGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [LogedinGuard] },
  { path: 'clientes', component: ClientesComponent, canActivate: [AdminGuard] },
  { path: 'peliculas/:id', component: PeliculasComponent},
  { path: 'reservas/:id', component: ReservasComponent, canActivate: [NoLogedinGuard] },
  { path: 'salas', component: SalasComponent, canActivate: [AdminGuard] },
  { path: 'sesiones', component: SesionesComponent, canActivate: [AdminGuard] },
  //NOTFOUND
  {path: '**', redirectTo: 'not-found'},
  {path: 'not-found', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
