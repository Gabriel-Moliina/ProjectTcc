import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, RouterLink, MatGridListModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})

export class ProjectComponent {
  hasProject:boolean = true
}
