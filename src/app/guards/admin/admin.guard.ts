import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { GeneralService } from 'src/app/services/general/general.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router,
    public authService: AuthServiceService,
    public generalService: GeneralService
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.isAdmin()) {
        return true;
      } else {
        this.generalService.toast('No tienes los permisos necesarios.', undefined, 'error');
        this.router.navigate(['/reservas']);
        return false;
      }
  }
}
