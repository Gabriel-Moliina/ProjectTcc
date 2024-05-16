import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(): boolean {
    // Implemente a lógica para verificar se o usuário está logado (por exemplo, se o token JWT existe e é válido)
    return true; // Exemplo básico: sempre retorna verdadeiro
  }

  // Outros métodos para verificar as permissões do usuário, como verificar o papel do usuário, etc.
}
