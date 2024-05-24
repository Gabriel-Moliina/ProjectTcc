import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../services/AuthService';
import { debug } from 'console';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatCardModule, MatRippleModule, MatIconModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  projectRoute:string = '/tcc/project'
  constructor(private authService: AuthService){
    if(authService.isAdmin())
      this.projectRoute = '/tcc/projects'
  }
}
