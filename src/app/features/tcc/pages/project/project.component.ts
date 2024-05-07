import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../core/components/button/button.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, RouterLink, MatGridListModule, ButtonComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})

export class ProjectComponent {
  constructor(private router: Router) {
        
  }
  
  createProject() {
      this.router.navigate(['/tcc/project/create']);
  }
  hasProject:boolean = false
}
