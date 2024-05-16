import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './AuthService';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn()) { // Verifique se o usuário está logado
      // Aqui você pode implementar sua lógica de autorização para determinar se o usuário tem permissão para acessar a rota
      // Por exemplo, verificar se o usuário tem um papel específico ou se possui outras permissões necessárias
      if (true) {
        return true; // Permita o acesso à rota
      } else {
        this.router.navigate(['/unauthorized']); // Roteie para uma página de não autorizado
        return false; // Não permita o acesso à rota
      }
    } else {
      this.router.navigate(['/login']); // Roteie para a página de login se o usuário não estiver logado
      return false; // Não permita o acesso à rota
    }
  }
}
