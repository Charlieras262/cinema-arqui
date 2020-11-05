import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class LogedinGuard implements CanActivate {
  constructor(private router: Router,
    public authService: AuthServiceService
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!this.authService.loggedIn()) {
        return true;
      } else {
        this.router.navigate(['/reservas']);
        return false;
      }
  }

}
