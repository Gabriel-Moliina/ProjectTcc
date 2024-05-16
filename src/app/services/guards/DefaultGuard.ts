import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { AuthService } from '../AuthService';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DefaultGuard {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if (state.url === '/tcc' || state.url === '/tcc/') {
      // Verifica se a URL é '/tcc' ou '/tcc/'
      if (this.authService.isAdmin()) {
        return this.router.parseUrl('/tcc/projects'); // Redireciona para '/tcc/projects' se o usuário for um admin
      } else {
        return this.router.parseUrl('/tcc/project'); // Redireciona para '/tcc/project' se o usuário não for um admin
      }
    }

    // Se a URL não corresponder às condições acima, permite a navegação
    return true;
  }
}
