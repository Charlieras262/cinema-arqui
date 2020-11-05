import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class NoLogedinGuard implements CanActivate {
  constructor(private router: Router,
    public authService: AuthServiceService,
    public rutaActiva: ActivatedRoute
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.loggedIn()) {
        return true;
      } else {
        const urlParts = state.url.split('/');
        if(urlParts.length == 3){
          this.router.navigate(['/login', urlParts[2]]);
        } else this.router.navigate(['/login']);
        return false;
      }
  }
}
